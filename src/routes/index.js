
const routerLogin = require("./login");
const routerReg = require("./reg");
const routerAdmin = require("./admin");
const router404 = require("./Error404");
const routerProduct = require("./product");
const routerArtwork = require("./artwork");
const routerTable = require("./table");
const routerOrder = require("./order");
const routerUser = require("./user");
const routerRating = require("./rating");
const routerFeedback = require("./feedback");
const routerCustomOrder = require("./customOrder");

module.exports = function (app) {
  app.use('/api/login', routerLogin) //oke
  app.use('/api/reg', routerReg)
  app.use('/api/product', routerProduct)
  app.use('/api/artwork', routerArtwork)
  app.use('/api/order', routerOrder)
  app.use('/api/user', routerUser)
  app.use('/api/rating', routerRating)
  app.use('/api/feedback', routerFeedback)
  app.use('/api/admin', routerAdmin)
  app.use('/api/customOrder', routerCustomOrder)
  app.use('/api/table', routerTable)
  app.use('*', router404)
};