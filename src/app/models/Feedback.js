const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
const feedbackSchema = new mongoose.Schema({
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
    text: {
        type: String,
        maxLength: 1000,
        required: true,
    },
    deletedAt: { type: String, maxLength: 255, default: null },
}, {
    timestamps: true
});
feedbackSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
feedbackSchema.plugin(mongoosePaginate);
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
