const path = require("path");
const mongoose = require('mongoose');
const Payment = mongoose.model("Payment");

module.exports = (app)=>{
app.post('/api/paymentpage', (req, res)=>{
    console.log(req.user)
    var newDocument = {paymentID:req.body.paymentID, payerID: req.body.payerID, user:req.user.id};
  Payment.create(newDocument, function (err,result){
      if(err) console.log(err)
      else (console.log(result))
  });
  res.end()
})
};