const path = require("path");
const mongoose = require('mongoose');
const Raffle = mongoose.model("Raffle");

module.exports = function(app) {
    // Load index page
    app.get("/api/raffle/:id", function (req, res) {
        Raffle.findById(req.params.id).populate('nonProfit').populate('prize')
        .exec(function (err, result) {
            if (err) console.log(err)
            else{
                console.log(typeof result.nonProfit[0])
                console.log(typeof result.prize[0])

                }
            res.send(result).end()
        })
    });

    app.post("/api/create/raffle", function (req, res) {
        Raffle.create({ prize: req.body.prize,
            nonProfit: req.body.nonProfit,
            startTime: Date,
            endTime: Date
        }, function (err, result) {
            if (err) console.log(err);
            else{
                console.log(result)
            }
        });
        res.end();
    });

};