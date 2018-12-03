const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    thumbnail: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    tickets:[{type: Schema.Types.ObjectId, ref: 'Ticket'}]

});
mongoose.model('User', userSchema);
