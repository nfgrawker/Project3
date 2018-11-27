const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, default: Date.now},
  nonProfit: [{type:Schema.Types.ObjectId, ref:"nonProfit"}]
  
});

const donation = mongoose.model("Donation", donationSchema);

module.exports = donation;