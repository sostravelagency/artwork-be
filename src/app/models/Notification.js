const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

const notificationSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['like', 'comment', 'report'], 
      required: true,
    },
    artworkId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artworks', 
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', 
    },
    recipients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', 
      }
    ],
    viewed: {
      type: Boolean,
      default: false,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });

notificationSchema .plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
notificationSchema .plugin(mongoosePaginate);
module.exports = mongoose.model('Notification', notificationSchema );

