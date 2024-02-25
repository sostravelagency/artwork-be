const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
const rating = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Tham chiếu đến schema người dùng
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products', // Tham chiếu đến schema sản phẩm
        required: true,
    },
    value: { //là giá trị đánh giá từ 1 đến 5.
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },

}, {
    timestamps: true
});
rating.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
rating.plugin(mongoosePaginate);
const Rating = mongoose.model('rating', rating);

module.exports = Rating;
