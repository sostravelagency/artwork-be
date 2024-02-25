const express = require('express')
const routerCreate = express.Router()
const routerReg = require('../app/controllers/RegController')

routerCreate.route("/")
    .post(routerReg.post)

module.exports = routerCreate