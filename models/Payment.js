const mongoose = require('mongoose');
const { Schema } = mongoose;
const paymentSchema = new Schema({
    payerID: String,
    paymentID: String,
    user:{type: Schema.Types.ObjectId, ref: "User"}
})
mongoose.model('Payment', paymentSchema);