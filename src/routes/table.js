const express = require('express')
const routerTable = express.Router()
const routerTableController = require('../app/controllers/TableController') 
const { cookieAuthenticated } = require('../config/db/authenticated')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')

// routerTable.post('/store', routerTableController.post)
routerTable.post('/edit/:id', cookieAuthenticated,authenticatedStaff,routerTableController.put)
routerTable.post('/edit/delete/:id',cookieAuthenticated,authenticatedStaff, routerTableController.delete)
// routerTable.get('/edit/:id',cookieAuthenticated,authenticatedStaff, routerTableController.edit)
routerTable.get('/search?',cookieAuthenticated,authenticatedStaff, routerTableController.search)
routerTable.get('/', routerTableController.show)

module.exports = routerTable