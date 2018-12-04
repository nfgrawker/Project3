const path = require("path");
const mongoose = require('mongoose');
const Raffle = mongoose.model("Prize");

module.exports = function(app) {
    // Load index page
    app.get("/api/raffle/:id", function (req, res) {
        Raffle.findById(id, function (err, result) {
            console.log(result)
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