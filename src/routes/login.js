const express = require('express')
const routerCreate = express.Router()
const routerLogin = require('../app/controllers/LoginController')

routerCreate
    .route("/")
    .post( routerLogin.post)
    .get( routerLogin.get)
    

module.exports = routerCreate