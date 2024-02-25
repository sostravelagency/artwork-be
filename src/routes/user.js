const express = require('express')
const routerUser = express.Router()
const UserController = require('../app/controllers/UserController')
const { authenticatedAdmin } = require('../config/db/authenticatedAdmin')


routerUser
    .route("/countByRole/:role")
    .get(UserController.countByRole)

routerUser
    .route("/followUser/:id/:userId")
    .post(UserController.followUser)
routerUser
    .route("/undFollowUser/:id/:userId")
    .post(UserController.undFollowUser)
routerUser
    .route("/changePassword/")
    .put(UserController.changePassword)

routerUser
    .route("/trash")
    .get(authenticatedAdmin, UserController.trash)

routerUser
    .route("/search")
    .get( UserController.search)

routerUser.put('/restore/:id',
    authenticatedAdmin, UserController.restore)

routerUser
    .route("/:id")
    .get(UserController.getOne)
    .put(UserController.put)
    .delete(authenticatedAdmin, UserController.delete)

routerUser
    .route("/")
    .get(UserController.get)
    .post(UserController.post)


module.exports = routerUser