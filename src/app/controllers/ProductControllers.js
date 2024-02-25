const { addLeadingZeros } = require('../../util/UtilsFuntion');
const Product = require('../models/Product');
class ProductControllers {


    put(req, res, next) {

        Product.findByIdAndUpdate(req.params.id,
            req.body, { new: true })
            .then((product => {
                res.json(product)
            }
            ))
            .catch(next =>
                res.json(next)
            )
    }


    trash(req, res, next) {
        Product.findDeleted()
            .then(courses =>
                res.json(courses))
            .catch(next)

    }

    restore(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => {
                Product.findByIdAndUpdate(req.params.id,
                    // req.body
                    {
                        "deleted": false
                    }
                )
                    .then((e) => res.json(e))
                    .catch(next)
            })
            .catch(next)

    }
    search(req, res, next) {
        function escapeRegExp(text) {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        }
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 9; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const formData = req.query.name
        const escapedSearchTerm = escapeRegExp(formData);
        const regex = new RegExp(escapedSearchTerm, 'i');
        const options = {
            page: page,
            limit: limit,

            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
        };
        if (formData === "") {

            Product.find({})
                .then((movies) => {
                    res.json({ "movie": [movies] })
                })
                .catch(next)
        } else {
            Product.paginate({ name: { $regex: regex } }, options, function (err, result) {

                if (result.totalPages < result.page) {
                    const options1 = {
                        page: result.totalPages,
                        limit: 9,

                        // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
                        collation: {
                            locale: 'en',
                        },
                    };
                    Product.paginate({ name: { $regex: escapedSearchTerm } }, options1, function (err, data) {


                        return res.json(
                            {
                                products: (data.docs),
                                totalPages: data.totalPages,
                                page: result.totalPages,
                                prevPage: data.prevPage,
                                nextPage: data.nextPage,
                                totalDocs: data.totalDocs,
                                search: formData
                            })

                    })

                } else {

                    return res.json(
                        {
                            products: (result.docs),
                            totalPages: result.totalPages,
                            page: result.page,
                            prevPage: result.prevPage,
                            nextPage: result.nextPage,
                            totalDocs: result.totalDocs,
                            search: formData
                        })
                }
            });
        }


    }

    post(req, res, next) {
        const formData = req.body
        const materialArray = formData.material
        const course = new Product(formData)

        // here

        // here
        // save thông tin
        course.save()
            .then(() => res.json(req.body))
            .catch((error) => {
                res.json(error)
            })

        // res.send(`oke`)
    }

    show(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000;
        const sort = parseInt(req.query.sort) || -1;
        const sortPrice = parseInt(req.query.sortPrice)
        const minPrice = parseInt(req.query.minPrice) || 0;
        const maxPrice = parseInt(req.query.maxPrice) || 10000000000;
        var sorts = { createdAt: sort }
        if (sortPrice) {
            sorts = { reducedPrice: sortPrice }
        }
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: sorts,
        };
        const query = { quantity: { $gt: 0 }, price: { $gte: minPrice, $lte: maxPrice } };
        Product.paginate(query, options, function (err, result) {
            return res.json(result)
        })
    }

    showProductStaff(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000;
        const sort = parseInt(req.query.sort) || -1; // Trang hiện tại, mặc định là trang 1
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: { createdAt: sort },
        };
        Product.paginate({}, options, function (err, result) {
            return res.json(result)
        })
    }

    showProductUser(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000;
        const sort = parseInt(req.query.sort) || -1; // Trang hiện tại, mặc định là trang 1
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: { createdAt: sort },
        };
        console.log(111111111111,req.params.id);
        Product.paginate({ user:  req.params.id  }, options, function (err, result) {
            return res.json(result)
        })
    }
    showSold(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000;
        const sort = parseInt(req.query.sort) || -1; // Trang hiện tại, mặc định là trang 1
        const sortPrice = parseInt(req.query.sortPrice)
        const minPrice = parseInt(req.query.minPrice) || 0;
        const maxPrice = parseInt(req.query.maxPrice) || 10000000000;
        var sorts = { sold: sort }
        if (sortPrice) {
            sorts = { price: sortPrice }
        }
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: sorts,
        };
        const query = { quantity: { $gt: 0 }, price: { $gte: minPrice, $lte: maxPrice } };
        Product.paginate(query, options, function (err, result) {
            return res.json(result)
        })
    }
    showPrice(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 10000000000;
        const sort = parseInt(req.query.sort) || -1;
        const minPrice = parseInt(req.query.minPrice) || 0;
        const maxPrice = parseInt(req.query.maxPrice) || 10000000000;

        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
            sort: { reducedPrice: sort },
        };
        const query = { quantity: { $gt: 0 }, reducedPrice: { $gte: minPrice, $lte: maxPrice } };
        Product.paginate(query, options, function (err, result) {
            return res.json(result)
        })
    }

    get(req, res, next) {
        try {
            const id = req.params.id
            Product.findById(id)
                .then((Product => {
                    res.json(Product)
                }
                ))
                .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve product.' });
        }
    }

    delete(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then((Product => {
                res.send(Product)
            }
            ))
            .catch(next => res.status(500).json({ error: 'Could not retrieve product.' }))

    } catch(error) {
        res.status(500).json(error);

    }

    countByProduct(req, res, next) {
        Product.aggregate([
            {
                $group: {
                    _id: null, // Nhóm theo trường 'name'
                    totalProducts: { $sum: 1 } // Đếm số lượng người dùng trong nhóm
                }
            }
        ]).then((result) => {
            res.json(result);
        }).catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Could not retrieve the user count.' });
        });
    }

}
module.exports = new ProductControllers;
