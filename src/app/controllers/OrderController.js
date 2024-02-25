const Order = require('../models/Order');
var bcrypt = require('bcryptjs');
const Token = require('../../config/db/config');
var jwt = require('jsonwebtoken');
const Product = require('../models/Product');
const moment = require('moment');
class OrderController {

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
                sort: { updatedAt: sort },
            };
            Order.paginate({}, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }
    getUser(req, res, next) {
        try {
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.find({ user: checkTokenValid.user._id })
                .then((order) => {

                    res.json(order);
                })
                .catch((err) => {
                    res.json(err);

                })

            // Trả về thông tin đơn hàng
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Pending" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Processing" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Shipped" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Delivered" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Canceled" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id, status: "Returned" }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getUserAll(req, res, next) {
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
                sort: { updatedAt: sort },
            };
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            Order.paginate({ user: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }



    getAdminPending(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Pending", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Processing", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Processing", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminProcessing(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Processing", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminShipped(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Shipped", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminDelivered(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Delivered", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminCanceled(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Canceled", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminReturned(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ status: "Returned", seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getAdminAll(req, res, next) {
        try {
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
            const limit = parseInt(req.query.limit) || 10000000000;
            const sort = parseInt(req.query.sort) || -1;
            const options = {
                page: page,
                limit: limit,
                collation: {
                    locale: 'en',
                },
                sort: { updatedAt: sort },
            };
            Order.paginate({ seller: checkTokenValid.user._id }, options)
                .then((order) => {
                    res.json(order);
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }
    }
    getOne(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            Order.findById(id)
                .then((order) => {

                    if (!order) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === order.user.toString() || checkTokenValid.user.admin) {
                        return res.json(order);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this order.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    getOrderUser(req, res, next) {
        try {
            const id = req.params.id; // Lấy ID của đơn hàng từ URL
            var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
            // Tìm đơn hàng theo ID và kiểm tra quyền truy cập của người dùng
            Order.findById(id)
                .then((order) => {

                    if (!order) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }
                    //  Kiểm tra xem người dùng có quyền truy cập đơn hàng không
                    if (checkTokenValid.user._id.toString() === order.user.toString() || checkTokenValid.user.admin) {
                        return res.json(order);
                    }
                    return res.status(403).json({ error: 'You do not have permission to access this order.' });
                })
                .catch(next => {
                    res.status(500).json(next)
                })
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the order.' });
        }

    }

    check(req, res, next) {
        const { products } = req.body;

        function checkProducts() {
            for (var i = 0; i < products.length; i++) {
                const productId = products[i]._id;
                const quantityToReduce = products[i].quantity;
                try {
                    // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
                    Product.findById(productId)
                        .then((dbProduct) => {

                            console.log(11111111, dbProduct);
                            if (!dbProduct || dbProduct.quantity < quantityToReduce) {
                                return res.status(500).json({ error: `Sản phẩm ${dbProduct?.name} không đủ trong kho.` });
                            }
                        })
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
        const { products, totalAmount, shippingAddress, status, description, email, name, phone, payment, seller } = req.body;

        for (var i = 0; i < products.length; i++) {
            const productId = products[i]._id;
            const quantityToReduce = products[i].quantity;
            // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
            Product.findById(productId)
                .then((dbProduct) => {
                    const a = dbProduct.quantity - quantityToReduce;
                    const b = dbProduct.sold + quantityToReduce;
                    Product.findByIdAndUpdate(dbProduct._id, { quantity: a, sold: b })
                        .then((Product) => {

                        })
                })
                .catch((error) => {
                    return res.status(500).json(error);
                })
        }

        const newOrder = new Order({
            user: checkTokenValid.user._id,
            products,
            payment,
            totalAmount: totalAmount,
            shippingAddress: shippingAddress,
            description,
            status,
            email,
            seller,
            name,
            phone
        });
        newOrder.save()
            .then((rating) => {
                return res.json(rating)
            })
            .catch((error) => {
                return res.status(500).json(error);
            })
    }

    payBill(req, res) {
        function sortObject(obj) {
            let sorted = {};
            let str = [];
            let key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    str.push(encodeURIComponent(key));
                }
            }
            str.sort();
            for (key = 0; key < str.length; key++) {
                sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
            }
            return sorted;
        }
        let vnp_Params = req.query;

        let secureHash = vnp_Params['vnp_SecureHash'];

        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        vnp_Params = sortObject(vnp_Params);

        let config = Token;
        let tmnCode = config.vnp_TmnCode
        let secretKey = config.vnp_HashSecret

        let querystring = require('qs');
        let signData = querystring.stringify(vnp_Params, { encode: false });
        let crypto = require("crypto");
        let hmac = crypto.createHmac("sha512", secretKey);
        let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

        if (secureHash === signed) {
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            console.log(1111111111111111, req.params);
            console.log(22222222222222, req.query);
            console.log(333333333333333, secureHash);
            if (req.query.vnp_TransactionStatus == "00") {

                Order.findByIdAndUpdate(req.params.id, { payment: 'Transfer', status: 'Processing' })
                    .then(() => {
                        res.json({ message: 'Orders updated successfully.' });
                    })

            } else {
                Order.findByIdAndUpdate(req.params.id, { payment: 'Cancelled', status: 'Cancelled' })
                    .then(() => {

                        res.json({ message: 'Orders updated successfully.' });
                    })
            }

        } else {

            res.render('success', { code: '97' })
        }
    }

    pay(req, res, next) {
        var checkTokenValid = jwt.verify(req.cookies.accessToken, Token.refreshToken);
        var idOrder
        const { products, totalAmount, shippingAddress, status, description, email, name, phone } = req.body;

        for (var i = 0; i < products.length; i++) {
            const productId = products[i]._id;
            const quantityToReduce = products[i].quantity;
            // Kiểm tra xem sản phẩm có đủ số lượng trong kho không
            Product.findById(productId)
                .then((dbProduct) => {
                    const a = dbProduct.quantity - quantityToReduce;
                    const b = dbProduct.sold + quantityToReduce;
                    Product.findByIdAndUpdate(dbProduct._id, { quantity: a, sold: b })
                        .then((Product) => {

                        })
                })
                .catch((error) => {
                    return res.status(500).json(error);
                })
        }

        const newOrder = new Order({
            user: checkTokenValid.user._id,
            products,
            totalAmount: totalAmount,
            shippingAddress: shippingAddress,
            description,
            status,
            email,
            name,
            phone
        });
        newOrder.save()
            .then((rating) => {
                process.env.TZ = 'Asia/Ho_Chi_Minh';
                let date = new Date();
                let createDate = moment(date).format('YYYYMMDDHHmmss');

                let ipAddr = req.headers['x-forwarded-for'] ||
                    req.connection.remoteAddress ||
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress;
                let config = Token;

                let tmnCode = config.vnp_TmnCode;
                let secretKey = config.vnp_HashSecret;
                let vnpUrl = config.vnp_Url;
                let returnUrl = config.vnp_ReturnUrl;
                let orderId = moment(date).format('DDHHmmss');
                let amount = req.body.amount;
                let bankCode = req.body.bankCode;

                let locale = req.body.language;
                if (locale === null || locale === '') {
                    locale = 'vn';
                }
                let currCode = 'VND';
                let vnp_Params = {};
                vnp_Params['vnp_Version'] = '2.1.0';
                vnp_Params['vnp_Command'] = 'pay';
                vnp_Params['vnp_TmnCode'] = tmnCode;
                vnp_Params['vnp_Locale'] = locale;
                vnp_Params['vnp_CurrCode'] = currCode;
                vnp_Params['vnp_TxnRef'] = rating._id;
                vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + rating._id;
                vnp_Params['vnp_OrderType'] = 'other';
                vnp_Params['vnp_Amount'] = amount * 100;
                // đường dẫn trả về khi thanh toán 
                vnp_Params['vnp_ReturnUrl'] = returnUrl + 'payment/bill/' + rating._id;
                vnp_Params['vnp_IpAddr'] = ipAddr;
                vnp_Params['vnp_CreateDate'] = createDate;
                if (bankCode !== null && bankCode !== '') {
                    vnp_Params['vnp_BankCode'] = bankCode;
                }

                vnp_Params = sortObject(vnp_Params);

                let querystring = require('qs');
                let signData = querystring.stringify(vnp_Params, { encode: false });
                let crypto = require("crypto");
                let hmac = crypto.createHmac("sha512", secretKey);
                let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
                vnp_Params['vnp_SecureHash'] = signed;
                vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

                res.json({ url: vnpUrl });
            })
            .catch((error) => {
                return res.status(500).json(error);
            })


        function sortObject(obj) {
            let sorted = {};
            let str = [];
            let key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) {
                    str.push(encodeURIComponent(key));
                }
            }
            str.sort();
            for (key = 0; key < str.length; key++) {
                sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
            }
            return sorted;
        }
    };

    // Vui lòng tham khảo thêm tại code demo


    // putAdminStatus(req, res, next) {
    //     try {
    //         const { status } = req.params; // Lấy status
    //         const { orders } = req.body;
    //         console.log(22222222, orders);
    //         for (const orderId of orders) {
    //             console.log(11111111, orders);
    //             Order.findByIdAndUpdate({ _id: orderId }, { status: status })
    //                 .catch(err => res.json({ error: err }))
    //         }
    //     } catch (error) {
    //         
    //         res.status(500).json({ error: 'Could not update the order.' });
    //     }
    // }
    async putAdminStatus(req, res, next) {
        try {
            const { status } = req.params; // Lấy status
            const { orders } = req.body;
            for (const orderId of orders) {
                try {
                    // Sử dụng await để chờ cho đến khi cập nhật được hoàn thành
                    await Order.findByIdAndUpdate({ _id: orderId }, { status: status });
                } catch (err) {
                    // Xử lý lỗi khi cập nhật không thành công
                    console.error(`Error updating order ${orderId}: ${err.message}`);
                    // Bạn có thể quyết định liệu bạn muốn tiếp tục với các lệnh tiếp theo hoặc dừng luồng ở đây.
                    // Nếu bạn muốn dừng, bạn có thể sử dụng return hoặc throw err.
                }
            }

            // Trả về kết quả thành công nếu mọi thứ đều ok
            res.json({ message: 'Orders updated successfully.' });
        } catch (error) {

            res.status(500).json({ error: 'Could not update the orders.' });
        }
    }
    async putUserStatus(req, res, next) {
        try {
            const { id } = req.params; // Lấy status

            Order.findByIdAndUpdate({ _id: id }, { status: "Canceled" })
                .then((e) => {

                    res.json({ message: 'Orders updated successfully.' });
                })

            // Trả về kết quả thành công nếu mọi thứ đều ok
        } catch (error) {

            res.status(500).json({ error: 'Could not update the orders.' });
        }
    }
    put(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đơn hàng từ URL
            const { status, shippingAddress } = req.body;

            // Kiểm tra xem đơn hàng tồn tại
            Order.findById(id)
                .then((existingOrder) => {
                    if (!existingOrder) {
                        return res.status(404).json({ error: 'Order not found.' });
                    }

                    // Kiểm tra xem người dùng có quyền cập nhật đơn hàng không
                    if (existingOrder.user.toString() !== req.user._id.toString()) {
                        return res.status(403).json({ error: 'You do not have permission to update this order.' });
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

            res.status(500).json({ error: 'Could not update the order.' });
        }

    }

    delete(req, res, next) {
        Order.delete({ _id: req.params.id })
            .then((Product => {
                res.send(Product)
            }
            ))
            .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

    } catch(error) {
        res.status(500).json(error);

    }

    getAdminDeliveredByMonth(req, res, next) {
        try {
            const year = parseInt(req.query.year) || moment().year(); // Năm hiện tại, mặc định là năm hiện tại
            // Chuyển đổi ngày bắt đầu và ngày kết thúc thành đối tượng Date
            const startDate = new Date(`${year}-01-01T00:00:00.000Z`);
            const endDate = new Date(`${year}-12-31T23:59:59.999Z`);

            // Truy vấn tổng tiền của đơn hàng theo từng tháng trong năm
            Order.aggregate([
                {
                    $match: {
                        status: "Delivered", // hoặc bất kỳ trạng thái đơn hàng nào bạn muốn
                        updatedAt: {
                            $gte: startDate, // Ngày bắt đầu của năm
                            $lte: endDate // Ngày kết thúc của năm
                        }
                    }
                },
                {
                    $group: {
                        _id: { month: { $month: "$updatedAt" } }, // Nhóm theo tháng
                        totalAmount: { $sum: "$totalAmount" }, // Tính tổng tiền của các đơn hàng trong nhóm
                        totalQuantity: { $sum: { $sum: "$products.quantity" } }
                    }
                },
                {
                    $sort: { "_id.month": 1 } // Sắp xếp theo tháng
                }
            ]).then((result) => {
                res.json(result);
            });
        } catch (error) {

            res.status(500).json({ error: 'Could not retrieve the total amounts.' });
        }
    }
}
module.exports = new OrderController;
