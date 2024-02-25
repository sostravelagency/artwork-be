var jwt = require("jsonwebtoken");
var Token = require("../../config/db/config");


class AdminController {
    index(req, res, next) {
        if (req.cookies.accessToken) {
            try {
                var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
                if (checkTokenValid.user.admin) {
                    return res.json({ admin: true });
                }
                else {
                    return res.json({ admin: false });
                }
            } catch (err) {
                return res.status(401).json(err)
            }
        }
        return res.json({ admin: 'login' })
    }

}
module.exports = new AdminController;
