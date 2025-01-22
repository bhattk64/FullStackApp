const mongoose = require('mongoose');
const colors = require('colors');

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,)
        console.log(`MongoDb connected:${conn.connection.host}`.cyan.underline.bold);


    }
    catch (err) {
        console.error(`Error in:${err}`.red.underline.bold);
     process.exit(1);
    }
}
module.exports = connectDb;