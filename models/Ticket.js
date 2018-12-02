const mongoose = require('mongoose');
const { Schema } = mongoose;

const ticketSchema = new Schema({
    raffle : {type: Schema.Types.ObjectId, ref: 'Raffle'},
    timePurchased: {type: Date, default: Date.now},
    user:{type: Schema.Types.ObjectId, ref: "User"}

});
mongoose.model('Ticket', ticketSchema);
