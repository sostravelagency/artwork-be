const express = require('express')
const routerHome = express.Router()
const ErrorController = require('../app/controllers/ErrorController') 

routerHome.all('/', ErrorController.index)

module.exports = routerHome