const mongoose = require('mongoose');
const { Schema } = mongoose;

const nonprofitSchema = new Schema({
    name: String,
    address: String,
    website: String,
    contactNumber: Number,
    contactName: String
});
mongoose.model('NonProfit', nonprofitSchema);