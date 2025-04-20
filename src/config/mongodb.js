const mongoose = require('mongoose')

const MONGO_URL = 
   'mongodb+srv://praveenupadhyay997:aircel123%40@hotelcyclops.ry752hd.mongodb.net/cyclopsdatabase?retryWrites=true&w=majority'

const connectMongoDb = async () => {
    await mongoose.connect(MONGO_URL)
}

module.exports = {
    connectMongoDb
};