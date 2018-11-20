const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const raffleSchema = new Schema({
  title: { type: String, required: true },
  prize: { type: String, required: true },
  descriptions: { type: String},
  sponsor: {type: String},
  endDate: { type: String, required: true},
  nonProfit: [{type:Schema.Types.ObjectId, ref:"nonProfit"}],
  donations: [{type:Schema.Types.ObjectId, ref:"Donation"}],
    
});

const Raffle = mongoose.model("Raffle", raffleSchema);

module.exports = Raffle;