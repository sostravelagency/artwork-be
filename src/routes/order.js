const express = require('express')
const routerOrder = express.Router()
const OrderController = require('../app/controllers/OrderController')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')


routerOrder
    .route("/manager/dashboard")
    .get(OrderController.getAdminDeliveredByMonth)


routerOrder
    .route("/user/pending")
    .get(OrderController.getUserPending)
routerOrder
    .route("/user/processing")
    .get(OrderController.getUserProcessing)
routerOrder
    .route("/user/shipped")
    .get(OrderController.getUserShipped)
routerOrder
    .route("/user/delivered")
    .get(OrderController.getUserDelivered)
routerOrder
    .route("/user/canceled")
    .get(OrderController.getUserCanceled)
routerOrder
    .route("/user/returned")
    .get(OrderController.getUserReturned)

routerOrder
    .route("/user/all")
    .get(OrderController.getUserAll)

    

routerOrder
    .route("/admin/pending")
    .get(OrderController.getAdminPending)
routerOrder
    .route("/admin/processing")
    .get(OrderController.getAdminProcessing)
routerOrder
    .route("/admin/shipped")
    .get(OrderController.getAdminShipped)
routerOrder
    .route("/admin/delivered")
    .get(OrderController.getAdminDelivered)
routerOrder
    .route("/admin/Canceled")
    .get(OrderController.getAdminCanceled)
routerOrder
    .route("/admin/returned")
    .get(OrderController.getAdminReturned)

routerOrder
    .route("/admin/all")
    .get(OrderController.getAdminAll)

routerOrder
    .route("/admin/put/:status")
    .put( OrderController.putAdminStatus)

routerOrder
    .route("/user/put/:id")
    .put(OrderController.putUserStatus)

routerOrder
    .route("/user/:id")
    .get(OrderController.getOrderUser)


routerOrder
    .route("/user")
    .get(OrderController.getUser)
    .post(OrderController.check, OrderController.post)

routerOrder
    .route("/pay")
    .post(OrderController.check, OrderController.pay)

routerOrder
    .route("/payment/bill/:id")
    .post(OrderController.payBill)

routerOrder
    .route("/:id")
    .get(authenticatedStaff, OrderController.getOne)
    .put(authenticatedStaff, OrderController.put)
    .delete(authenticatedStaff, OrderController.delete)
routerOrder
    .route("/")
    .get(authenticatedStaff, OrderController.getAdmin)
    .post(authenticatedStaff, OrderController.check, OrderController.post)


module.exports = routerOrder