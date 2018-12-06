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
       Raffle.find({}).populate('prize')
       .exec(function(err, raffles){
            res.send(raffles).end()
           console.log(raffles)
       })
    });

    app.post("/api/create/raffle", function (req, res) {
        Raffle.create({ prize: req.body.prize,
            nonProfit: req.body.nonProfit,
            startTime: req.body.startTime,
            endTime: req.body.endTime
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
            for (let i in raffles){
                if(raffles[i].winner == null){
                    var number = raffles[i].tickets.length
                    randomNumber = Math.floor((Math.random()*number))
                    raffles[i].winner = raffles[i].tickets[randomNumber]
                    raffles[i].save()
                }
            };
            res.end()
        })
    })
};