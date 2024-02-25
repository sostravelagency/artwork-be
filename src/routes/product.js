const express = require('express')
const routerProduct = express.Router()
const ProductControllers = require('../app/controllers/ProductControllers')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')

routerProduct
    .route("/countByProduct")
    .get(ProductControllers.countByProduct)
// xóa mềm
routerProduct.delete('/:id',  ProductControllers.delete)

// khôi phục dữ liệu đã xóa
routerProduct.put('/restore/:id', authenticatedStaff, ProductControllers.restore)
// danh sách đã xóa 
routerProduct.get('/trash', authenticatedStaff, ProductControllers.trash)
routerProduct.get('/search?', ProductControllers.search)

routerProduct.get('/staff', ProductControllers.showProductStaff)
routerProduct.get('/user/:id', ProductControllers.showProductUser)
// sắp xếp sản phẩm theo thứ tự bán chạy
routerProduct.get('/sold', ProductControllers.showSold)
// lấy sản phẩm theo ID 
routerProduct.get('/:id', ProductControllers.get)
routerProduct.put('/:id', ProductControllers.put)
routerProduct.post('/', ProductControllers.post)
routerProduct.get('/', ProductControllers.show)

module.exports = routerProduct