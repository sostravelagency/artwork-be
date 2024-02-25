
const User = require('../models/User');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');

class loginControllers {
    post(req, res, next) {
        const formData = req.body
        User.findOne({ username: formData.username })
            .then((user) => {
                user === null ?
                    res.status(401).send({
                        error: "Invalid username or password.",
                    }) :
                    bcrypt.compare(formData.password, user.password, function (err, check) {
                        if (check) {
                            // var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (10), user }, 'shhhhh');
                            var token = jwt.sign({ user }, Token.refreshToken);
                            user._doc.password=""
                            res.cookie("accessToken", token);
                            return res.json({ ...user, accessToken: token })
                        }
                        return res.status(401).send({
                            error: "Invalid username or password.",
                        })
                    });
            })
            .catch(next => {
                res.status(500).json(next)
            })
    }
    get(req, res, next) {
        if (req.cookies.accessToken) {
            try {
                var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
                if (checkTokenValid.user) {
                    return res.json({ login: true ,user:checkTokenValid.user});
                }
                else {
                    return res.json({ login: false });
                }
            } catch (err) {
                return res.status(401).json(err)
            }
        }
        return res.json({ login: false });
    }
}
module.exports = new loginControllers;
