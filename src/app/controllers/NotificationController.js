const Notification = require("../models/Notification");
const Token = require("../../config/db/config");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

class notificationController {
    post(req, res, next) {
        const formData = req.body
        const course = new Notification(formData)
        course.save()
            .then(() => res.json(req.body))
            .catch((error) => {
                res.json(error)
            })

        // res.send(`oke`)
    }

    get(req, res, next) {
        Notification
            .find({})
            .populate('pusher')
            .populate('artwork')
            .sort({ timestamp: 1 })
            .exec(function (err, result) {
                console.log(result)
                return res.json(result)
            })
    }
}

module.exports = new notificationController;
