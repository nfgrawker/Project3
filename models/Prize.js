const mongoose = require('mongoose');
const { Schema } = mongoose;

const prizeSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: String,
});
mongoose.model('Prize', prizeSchema);
