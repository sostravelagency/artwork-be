const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 255,
        required: true,
    },
    description: {
        type: String,
        maxLength: 1000,
    },
    discountType: {
        type: String,
        enum: ['Percentage', 'Amount'],
        required: true,
    },
    discountValue: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    deletedAt: { type: String, maxLength: 255, default: null },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true
}
);
Promotion.plugin(mongooseDelete,{ deletedAt : true , overrideMethods: 'all' });
Promotion.plugin(mongoosePaginate);
const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;
