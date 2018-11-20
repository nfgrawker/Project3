const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nonProfitSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  missonStatement: { type: String},
  raffles: [{type:Schema.Types.ObjectId, ref:"Raffle"}]
  
});

const nonProfit = mongoose.model("nonProfit", nonProfitSchema);

module.exports = nonProfit;