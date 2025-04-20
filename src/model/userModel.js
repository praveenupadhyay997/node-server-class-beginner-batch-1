const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    emailId: { type: String },
    password: { type: String}
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
    UserModel
}