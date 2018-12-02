const mongoose = require('mongoose');
const { Schema } = mongoose;

const prizeSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: string,
    endTime: Date

});
mongoose.model('Prize', prizeSchema);
