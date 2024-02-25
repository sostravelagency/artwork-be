
const mongoose = require('mongoose');
async function Connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Artworks_Sharing_Platform');
        console.log("ok!");
    } catch (error) {
        console.log("error!");
    }
}


module.exports = { Connect }