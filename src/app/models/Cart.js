const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

const cartSchema = new mongoose.Schema({
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
    quantity: { type: Number, required: true },
    deletedAt: { type: String, maxLength: 255, default: null },
}, {
    timestamps: true
});
cartSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
cartSchema.plugin(mongoosePaginate);
const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;