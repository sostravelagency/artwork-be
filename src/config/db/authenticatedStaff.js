var jwt = require("jsonwebtoken");

var Token = require("./config");

module.exports = {
  authenticatedStaff: function (req, res, next) {
    if (req.cookies.accessToken) {
      try {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
        console.log(checkTokenValid.user.role)

        if (checkTokenValid.user.role=='admin') {
          return next();
        }
        else {
          return res.status(403).json({ err: 'khong co quyen truy cap', })
        }
      } catch (err) {
        return res.status(500).json({ err: err })
      }
    }
    return res.status(401).json({ 401: 'chưa đăng nhập' })
  },
};
