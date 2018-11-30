const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    username: String,
    thumbnail: String,
    email: ''

});
mongoose.model('users', userSchema);
