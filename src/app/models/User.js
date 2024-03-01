const mongoose = require('mongoose');
// const MongooseDelete = require('mongoose-delete');
const mongoosePaginate = require('mongoose-paginate-v2');
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema;
mongoose.plugin(slug)
const followSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const followAddSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    createdAt: { type: Date, default: Date.now },
});

const User = new Schema({
    username: { type: String, maxLength: 255, unique: true },
    password: { type: String, maxLength: 255 },
    follow: [followSchema],
    followAdd: [followAddSchema],
    phone: { type: String, maxLength: 255, unique: true },
    email: { type: String, maxLength: 255, unique: true },
    money: { type: Number, default: 0, },
    address: { type: String, maxLength: 255, default: '' },
    name: { type: String, maxLength: 255, default: '' },
    avatar: { type: String, default: 'https://firebasestorage.googleapis.com/v0/b/swd-longchim.appspot.com/o/images%2F143086968_2856368904622192_1959732218791162458_n.png?alt=media&token=009e2c55-5541-48bf-9442-c410dfb5738a' },
    role: { type: String, enum: ['user', 'manager', 'staff', 'admin'], default: 'user' },
    deleted: {type: Boolean, default: false},
    deletedAt: { type: String, maxLength: 255, default: null },
    disable: {type: Boolean, default: false},
    hidden: {type: Boolean, default: false}
},
    {
        timestamps: true
    }
)

// User.plugin(MongooseDelete, { deletedAt: true, overrideMethods: 'all' });
User.plugin(mongoosePaginate);
module.exports = mongoose.model('user', User);

