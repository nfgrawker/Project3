const path = require("path");
const mongoose = require('mongoose');
const Payment = mongoose.model("Payment");

module.exports = (app)=>{
app.post('/api/paymentpage', (req, res)=>{
  Payment.create(req.body, function (err,result){
      if(err) console.log(err)
      else (console.log(result))
  }) 
  res.end()
})
}