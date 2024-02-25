const express = require('express')
const routerFeedback = express.Router()
const FeedbackController = require('../app/controllers/FeedbackController')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')



// routerFeedback
//     .route("/trash")
//     .get(authenticatedStaff, FeedbackController.trash)

// routerFeedback.put('/restore/:id',
//     authenticatedStaff, FeedbackController.restore)
routerFeedback
    .route("/product/:id")
    .get(FeedbackController.getProduct)
routerFeedback
    .route("/:id")
    .get(FeedbackController.getOne)
    .put(FeedbackController.put)
    .delete(authenticatedStaff, FeedbackController.delete)
routerFeedback
    .route("/")
    .get(authenticatedStaff, FeedbackController.get)
    .post(FeedbackController.post)


module.exports = routerFeedback