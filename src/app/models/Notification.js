const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new mongoose.Schema({
    artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'artworks', 
    },
    pusher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', 
    },
    author: {
      type: String,
      default: "" 
    },
    // recipients: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user', 
    //   }
    // ],
    textType: {
      type: String,
      default: "",
    },
    type: {
      type: Number, 
      default: 0
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });

module.exports = mongoose.model('Notification', notificationSchema );

