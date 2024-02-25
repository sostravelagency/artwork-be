const Artwork = require("../models/Artwork");
const Rating = require("../models/Rating");
const User = require("../models/User");
const UserController = require("./UserController");


class RatingController {


    get(req, res, next) {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại, mặc định là trang 1
        const limit = parseInt(req.query.limit) || 100; // Số lượng phần tử trên mỗi trang, mặc định là 10
        const options = {
            page: page,
            limit: limit,
            // tùy chọn xác định cách sắp xếp và so sánh trong truy vấn.
            collation: {
                locale: 'en',
            },
        };
        Rating.paginate({}, options, function (err, result) {
            res.json(result)
        })
    }


    post(req, res, next) {
        try {
            const formData = req.body;
            // User.findById(formData.user)
            //     .then((data => {
            //         console.log(11111111111111,data);

            //         if (data) {
            //         console.log(333333333333,data);

            //             return res.status(404).json({ error: 'User not found.' });
            //         }

            //     }))
            //     .catch(err => res.status(err))



            // Artwork.findById(formData.product)
            //     .then((data) => {
            //         console.log(22222222222,data);
            //         if (data==null) {
            //             return res.status(404).json({ error: 'Artwork not found.' });
            //         }

            //     })
            //     .catch(err => res.status(err))


            // Tạo một đối tượng đánh giá mới
            const newRating = new Rating(formData);
            // Lưu đánh giá vào cơ sở dữ liệu
            newRating.save()
                .then((rating) => {
                    return res.json(rating)

                })
                .catch((error) => {
                    return res.status(500).json(error);

                })

            // Trả về đánh giá đã tạo thành công
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Could not create the rating.' });
        }

    }

    put(req, res, next) {
        Rating.findByIdAndUpdate(req.params.id,
            req.body,{ new: true })
            .then((product => {
                res.json(product)
            }
            ))
            .catch(next =>
                res.json(next)
            )

    }

    getOne(req, res, next){

        Rating.findById(req.params.id )
        .then((data => res.json(data)))
        .catch(err =>res.status(err))
    }

    delete(req, res, next) {
        Rating.delete({ _id: req.params.id })
            .then((User => {
                res.send(User)
            }
            ))
            .catch(error => res.status(500).json({ error: 'Could not retrieve Rating.' }))

    } catch(error) {
        res.status(500).json(error);

    }

    delete(req, res, next) {
        try {
            const { id } = req.params; // Lấy ID của đánh giá từ URL

            // Tìm đánh giá theo ID
            const rating = Rating.findById(id);
            if (!rating) {
                return res.status(404).json({ error: 'Rating not found.' });
            }

            // Kiểm tra xem người dùng có quyền xóa đánh giá không
            if (rating.user.toString() !== req.user._id.toString()) {
                return res.status(403).json({ error: 'You do not have permission to delete this rating.' });
            }

            // Xóa đánh giá
            rating.remove();

            // Trả về thông báo xóa thành công
            res.json({ message: 'Rating deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Could not delete the rating.' });
        }

    }

}
module.exports = new RatingController;
