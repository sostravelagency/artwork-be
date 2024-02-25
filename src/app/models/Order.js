const mongoose = require('mongoose');
const MongooseDelete = require('mongoose-delete');
const mongoosePaginate = require('mongoose-paginate-v2');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Tham chiếu đến người dùng đã đặt hàng
    seller: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Tham chiếu đến người dùng đã đặt hàng
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'products', required: true }, // Tham chiếu đến sản phẩm đã đặt
            quantity: { type: Number, default: 1 }, // Số lượng sản phẩm đã đặt (mặc định là 1)
            price: { type: Number, required: true }, // Giá sản phẩm khi đặt hàng
            image: [{ type: String }],

        }
    ],
    totalAmount: { type: Number, required: true }, // Tổng số tiền cho đơn hàng
    shippingAddress: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 1000 },
    email: { type: String, maxLength: 255, required: true },
    name: { type: String, maxLength: 255, required: true },
    phone: { type: String, maxLength: 255, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Canceled', 'Returned'],
        default: 'Pending', // Trạng thái mặc định là "Chờ xử lý"
    },
    payment: {
        type: String, maxLength: 255,
        enum: ['Cash', 'Transfer', 'Pending', 'Canceled'],
        default: 'Pending', // Trạng thái mặc định là "Chờ xử lý"
    },
    deletedAt: { type: String, maxLength: 255, default: null },
}, {
    timestamps: true
});
OrderSchema.plugin(MongooseDelete, { deletedAt: true, overrideMethods: 'all' });
OrderSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('order', OrderSchema);;
