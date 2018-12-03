const mongoose = require('mongoose');
const { Schema } = mongoose;

const nonprofitSchema = new Schema({
    name: String,
    address: String,
    website: String,
    contactNumber: Number,
    contactName: String,
    description: String,
    imageLink: String,
    admins:[{type: Schema.Types.ObjectId, ref: 'User'}]
});
mongoose.model('NonProfit', nonprofitSchema);
