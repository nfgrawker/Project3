const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
<<<<<<< HEAD
    name: String,
    thumbnail: String
=======
    firstName: String,
    lastName: String,
    username: String,
    thumbnail: String,
    email: String,

>>>>>>> 3cf120697f6f32bf04607b645fe25afbbf104ef8
});
mongoose.model('users', userSchema);
