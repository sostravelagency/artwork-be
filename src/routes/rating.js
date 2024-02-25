const express = require('express')
const routerRating = express.Router()
const RatingController = require('../app/controllers/RatingController')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')



// routerRating
//     .route("/trash")
//     .get(authenticatedStaff, RatingController.trash)

// routerRating.put('/restore/:id',
//     authenticatedStaff, RatingController.restore)

routerRating
    .route("/:id")
    .get(RatingController.getOne)
    .put(RatingController.put)
    .delete(authenticatedStaff, RatingController.delete)
routerRating
    .route("/")
    .get(authenticatedStaff, RatingController.get)
    .post(RatingController.post)


module.exports = routerRating