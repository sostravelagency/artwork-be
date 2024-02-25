const express = require('express')
const routerArtwork = express.Router()
const ProductControllers = require('../app/controllers/ArtworkControllers')
const { authenticatedStaff } = require('../config/db/authenticatedStaff')

routerArtwork
    .route("/countByProduct")
    .get(ProductControllers.countByProduct)
// xóa mềm
routerArtwork.delete('/:id', authenticatedStaff, ProductControllers.delete)

// khôi phục dữ liệu đã xóa
routerArtwork.put('/restore/:id', authenticatedStaff, ProductControllers.restore)
// danh sách đã xóa 
routerArtwork.get('/trash', authenticatedStaff, ProductControllers.trash)
routerArtwork.get('/search?', ProductControllers.search)
routerArtwork.get('/searchGenre?', ProductControllers.searchGenre)

routerArtwork.get('/staff', ProductControllers.showProductStaff)
// sắp xếp sản phẩm theo thứ tự bán chạy
routerArtwork.get('/sold', ProductControllers.showSold)

// routerArtwork.get('/sold', ProductControllers.showSold)
// lấy sản phẩm theo ID 

routerArtwork.get('/random', ProductControllers.showRandom)
routerArtwork.get('/follow/:id', ProductControllers.showFollow)
routerArtwork.get('/:id', ProductControllers.get)
// lấy theo user
routerArtwork.get('/user/:id/', ProductControllers.getArtworkUser)
routerArtwork.post('/unlikeArtwork/:artworkId/:userId', ProductControllers.unlikeArtwork)
routerArtwork.post('/likeArtwork/:artworkId/:userId', ProductControllers.likeArtwork)
routerArtwork.post('/comments/:artworkId/:userId', ProductControllers.cmtArtwork)
routerArtwork.put('/:id', ProductControllers.put)
routerArtwork.post('/', ProductControllers.post)
routerArtwork.get('/', ProductControllers.show)

module.exports = routerArtwork