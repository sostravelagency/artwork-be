const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug)
const product = new Schema({
    name: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Tham chiếu đến schema người dùng
        required: true,
    },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    genre: [{ type: String }],
    sold: { type: Number, default: 0 },
    image: [{ type: String }],
    description: { type: String, default: '' },
    deletedAt: { type: String, maxLength: 255, default: null },
}, {
    timestamps: true
})
product.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
product.plugin(mongoosePaginate);
module.exports = mongoose.model('products', product);

