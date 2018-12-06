const path = require("path");
const mongoose = require('mongoose');
const Ticket = mongoose.model("Ticket");
const Raffle = mongoose.model("Raffle")
const moment = require("moment")
module.exports = function(app) {
    // Load index page
    app.post("/api/posttickets",function(req,res){
        var documentArray = [];
        var ticketsArray = [];
        for(i=0;i<req.body.amount;i++){
            documentArray.push({raffle:req.body.raffle, user:req.user.id})
        }
        Ticket.insertMany(documentArray, function(err,docs){
            if (err) console.log(docs);
            else{
                Raffle.findById(req.body.raffle, function (err, doc) {
                    for (i in docs) {


                        doc.tickets.push(docs[i].id)

                    }
                    doc.save()
                });
        }
    });
        res.end()
    })
};