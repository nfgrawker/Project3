const path = require("path");
const mongoose = require('mongoose');
const NonProfit = mongoose.model("NonProfit");

module.exports = function(app) {
    // Load index page
    app.get("/api/nonprofit/:id", function (req, res) {

        NonProfit.findById(req.params.id, function (err, result) {
            if (err) console.log(err)
            res.send(result).end()
        })
    });

    app.post("/api/create/nonprofit", function (req, res) {
        NonProfit.create({ imageLink: req.body.image, name: req.body.name, address: req.body.address,
            description:req.body.description, contactName: req.body.contactName, contactNumber: req.body.contactNumber, website: req.body.website,
        followers: req.body.followers, amountRaised:req.body.amountRaised}, function (err, result) {
            if (err) console.log(err);
            else{
                console.log(result)
            }
        });
        res.end()
    });

};