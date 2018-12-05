const path = require("path");
const mongoose = require('mongoose');
const Raffle = mongoose.model("Raffle");
const moment = require("moment")
module.exports = function(app) {
    // Load index page
    app.get("/api/raffle/:id", function (req, res) {
        Raffle.findById(req.params.id, function (err, result) {
            console.log(result)
        })
    });
    app.get("/api/raffle/all/get", function(req,res){
       Raffle.find({}, function(err, raffles){
            res.send(raffles).end()
       })
    });

    app.post("/api/create/raffle", function (req, res) {
        Raffle.create({ prize: req.body.prize,
            nonProfit: req.body.nonProfit,
            startTime: req.body.start,
            endTime: req.body.end
        }, function (err, result) {
            if (err) console.log(err);
            else{
                console.log(result)
            }
        });
        res.end();
    });
    app.get("/api/winner/get", function(req, res){
        var now = moment();
        Raffle.find({endTime: { $gt:now, $lt:now.add(7,"days") }},function(err, raffles){
            console.log(raffles)
            res.end()
        })
    })
};