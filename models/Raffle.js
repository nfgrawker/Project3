const mongoose = require('mongoose');
const { Schema } = mongoose;

const raffleSchema = new Schema({
    prize: {type: Schema.Types.ObjectId, ref: 'Prize'},
    nonProfit: {type: Schema.Types.ObjectId, ref: 'NonProfit'},
    tickets: [{type: Schema.Types.ObjectId, ref: 'Ticket'}],
    startTime: Date,
    endTime: Date

});
mongoose.model('Raffle', raffleSchema);
