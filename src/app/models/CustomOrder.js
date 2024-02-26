const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const messageSchema = new Schema({
    sender: { type: String, required: true }, // Người gửi (người mua hoặc người bán)
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const customOrderSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Tham chiếu đến người dùng đã đặt hàng
    freelancer: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }, // Tham chiếu đến người dùng đã đặt hàng
    name: { type: String, required: true },
    bird: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number,default: 0 },
    spokes: { type: Number, required: false},
    email: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
    material: [{ type: String, enum: ['Tranh', 'Trang trí', 'Nghệ thuật'], required: true }],
    status: {
        type: String,
        enum: ['Pending', 'Deposit','Processing', 'Shipped', 'Delivered', 'Canceled', 'Returned'],
        default: 'Pending'
    },
    shippingAddress: { type: String, maxLength: 255, required: true },
    description: { type: String, },
    messages: [messageSchema], // Mảng chứa các tin nhắn giữa người mua và người bán
}, {
    timestamps: true
});

customOrderSchema.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
customOrderSchema.plugin(mongoosePaginate);

const CustomOrder = mongoose.model('customOrders', customOrderSchema);

module.exports = CustomOrder;
