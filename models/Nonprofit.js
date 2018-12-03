const mongoose = require('mongoose');
const { Schema } = mongoose;
const nonprofitSchema = new Schema({
    name: String,
    address: String,
    website: String,
    contactNumber: String,
    contactName: String,
    description: String,
    imageLink: String,
    admins:[{type: Schema.Types.ObjectId, ref: 'User'}],
    moneyRaised:Number,
    followers: Number,
    dateJoined:{type:Date, default:Date.now()}

});
mongoose.model('NonProfit', nonprofitSchema);