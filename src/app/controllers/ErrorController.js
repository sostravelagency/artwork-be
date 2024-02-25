
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const Movie = require('../models/Artwork');
class homeControllers {
    index(req, res, next) {
        if (req.cookies.accessToken) {
            try {

                res.status(404).json(
                    {
                        error: "404",

                    })
                // res.json(movies)



            } catch (err) {

                res.status(404).json(
                    {
                        error: "404",

                    })
            }
        } else {

            res.status(404).json(
                {
                    error: "404",
                })

        }

    }
}
module.exports = new homeControllers;
