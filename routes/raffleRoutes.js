const path = require("path");
const mongoose = require('mongoose');
const Raffle = mongoose.model("Raffle");
const moment = require("moment")
module.exports = function(app) {
    // Load index page
    app.get("/api/raffle/:id", function (req, res) {

        Raffle.findById(req.params.id).populate('nonProfit').populate('prize')
        .exec(function (err, result) {
            if (err) console.log(err)
            else{
                console.log(typeof result.nonProfit[0]);
                console.log(typeof result.prize[0])

                }
            res.send(result).end()
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
        var then = moment(now).add(10,"minutes");
        Raffle.find({endTime: { $gt:now, $lt:then }},function(err, raffles){
            console.log(raffles);
            res.end()
        })
    })
};