const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const donorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true},
  ownedTickets: {type: INT, required: false},
  donations: [{type:Schema.Types.ObjectId, ref:"Donation"}]
  
});

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;