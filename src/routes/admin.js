const express = require('express')
const routerHome = express.Router()
const AdminController = require('../app/controllers/AdminController') 

routerHome.get('/', AdminController.index)

module.exports = routerHome