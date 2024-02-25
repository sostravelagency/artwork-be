
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const Artwork= require('../models/Artwork');
const CustomOrder = require('../models/customOrder');

class CustomOrderController {

    getAdmin(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({}, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }

    }
    getUser(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;

            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id }, options, function (err, result) {
                return res.json(result)
            })
            // Trả về thông tin đơn hàng
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }

    }

    getUserPending(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Pending" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }

    getUserDeposit(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Deposit" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getUserProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }

    getUserShipped(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Shipped" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getUserDelivered(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Delivered" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getUserCanceled(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Canceled" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getUserReturned(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            CustomOrder.paginate({ user: checkTokenValid.user._id, status: "Returned" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }



    getAdminPending(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Pending" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminDeposit(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Deposit" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Processing" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Processing" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Processing" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminShipped(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Shipped" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminDelivered(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Delivered" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminCanceled(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Canceled" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getAdminReturned(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({ status: "Returned" }, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }

    getAdminAll(req, res, next) {
        try {
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { createdAt: sort },
            };
            CustomOrder.paginate({}, options)
                .then((CustomOrder) => {
                    res.json(CustomOrder);
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }
    }
    getOne(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            CustomOrder.findById(id)
                .then((CustomOrder) => {

                    if (!CustomOrder) {
                        return res.status(404).json({ error: 'CustomOrder not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === CustomOrder.user.toString() || checkTokenValid.user.admin) {
                        return res.json(CustomOrder);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this CustomOrder.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }

    }

    getOrderUser(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            CustomOrder.findById(id)
                .then((CustomOrder) => {

                    if (!CustomOrder) {
                        return res.status(404).json({ error: 'CustomOrder not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === CustomOrder.user.toString() || checkTokenValid.user.admin) {
                        return res.json(CustomOrder);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this CustomOrder.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the CustomOrder.' });
        }

    }

    check(req, res, next) {
        const { products } = req.body;

        async function checkProducts() {
            for (var i = 0; i < products.length; i++) {
                const productId = products[i]._id;
                const quantityToReduce = products[i].quantity;
                try {
                    // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
                    const dbProduct = await Artwork.findById(productId);
                    if (!dbProduct || dbProduct.quantity < quantityToReduce) {
                        return res.status(400).json({ error: `Sản phẩm ${dbProduct.name} không đủ trong kho.` });
                    }
                } catch (error) {
                    return res.status(500).json(error);
                }
            }
            // Nếu tất cả sản phẩm đều đủ số lượng, thực hiện các yêu cầu tiếp theo
            return next();
        }

        // Gọi hàm async để chạy vòng lặp và kiểm tra sản phẩm
        checkProducts();
    }
    post(req, res, next) {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
        const { products, totalAmount, shippingAddress, status, description, email, name, phone } = req.body;


        const newCustomOrder = new CustomOrder({
            ...req.body,
            user: checkTokenValid.user._id,
        });
        newCustomOrder.save()
            .then((rating) => {
                return res.json(rating)
            })
            .catch((error) => {
                return res.status(500).json(error);
            })
    }
    putAdminStatus(req, res, next) {
        try {
            const { status } = req.params; // Lấy status
            const { orders ,price} = req.body;
            for (const orderId of orders) {
                CustomOrder.findByIdAndUpdate({ _id: orderId }, { status: status,price:price})
                    .catch(err => res.json({ error: err }))
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the CustomOrder.' });
        }
    }

    putAdminPrice(req, res, next) {

        try {
            const { id } = req.params; // Lấy ID của đơn hàng từ URL
            const { price } = req.body;
console.log(11111111111,price);
            CustomOrder.findByIdAndUpdate(id, { price ,status: 'Processing'})
                .catch(err => res.json({ error: err }))

        } catch (error) {
            
            res.status(500).json({ error: error });
        }
    }

    put(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đơn hàng từ URL
            const { status, shippingAddress } = req.body;

            // Kiểm tra xem đơn hàng tồn tại
            CustomOrder.findById(id)
                .then((existingOrder) => {
                    if (!existingOrder) {
                        return res.status(404).json({ error: 'CustomOrder not found.' });
                    }

                    // Kiểm tra xem người dùng có quyền cập nhật đơn hàng không
                    if (existingOrder.user.toString() !== req.user._id.toString()) {
                        return res.status(403).json({ error: 'You do not have permission to update this CustomOrder.' });
                    }

                    // Cập nhật thông tin đơn hàng
                    existingOrder.status = status;
                    existingOrder.shippingAddress = shippingAddress;

                    // Lưu đơn hàng đã cập nhật vào cơ sở dữ liệu
                    const updatedOrder = existingOrder.save();

                    // Trả về đơn hàng đã cập nhật thành công
                    res.json(updatedOrder);
                })


        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not update the CustomOrder.' });
        }

    }

    delete(req, res, next) {
        CustomOrder.delete({ _id: req.params.id })
            .then((Artwork => {
                res.send(Artwork)
            }
            ))
            .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

    } catch(error) {
        res.status(500).json(error);

    }
}
module.exports = new CustomOrderController;
