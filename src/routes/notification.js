const express = require('express')
const routerCreate = express.Router()
const notificationRouter = require('../app/controllers/NotificationController')

routerCreate
    .route("/")
    .post( notificationRouter.post)
    .get( notificationRouter.get)
    

module.exports = routerCreate