const User = require('../models/User');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');

class RegController {
    post(req, res, next) {
        try {
            const formData = req.body

            if (formData.admin) {
                return res.status(500).send(
                    {
                        error: `you do not have access`

                    })
            }
            if (formData.password.length <= 4 ) {
                return res.status(402).send(
                    {
                        error: `Password must be at least 5 characters long`
                     
                    })

            }

            if (formData.username.length <= 5) {
                return res.status(402).send(
                    {
                        error: `Username must be at least 6 characters long`
                    })

            }
            if (formData?.phone.length <= 9) {
                return res.status(402).send(
                    {
                        error: `Phone must be at least 10 characters long`
                    })
            }
            User.findOne({ username: formData.username })
            .then((user,next)=>{
                if (user!==null) {
                    return res.status(402).send(
                        {
                            error: `Tên tài khoản đã tồn tại vui lòng tạo tài khoản khác!`
                        })
                }
            
                 // mã hóa password
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(formData.password, salt);
            var password = formData.password
            formData.password = hash
            formData.name = formData.username

            // console.log(formData);
            const Users = new User(formData)
            Users.save()
                .then(() =>
                    User.findOne({ username: formData.username })
                        .then((user) => {
                            user === null ?
                                res.status(401).send({
                                    error: "Invalid username or password.",
                                }) :
                                bcrypt.compare(password, user.password, function (err, check) {
                                    if (check) {
                                        // var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (10), user }, 'shhhhh');
                                        var token = jwt.sign({ user }, Token.refreshToken);
                                        // res.cookie("accessToken", token);
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
                )
                .catch((error) => {
                    res.status(500).send(error)
                })

            })


           
        } catch (error) {
            res.status(500).send(error)
        }

    }
}
module.exports = new RegController;
