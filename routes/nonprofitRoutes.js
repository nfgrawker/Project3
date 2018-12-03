const path = require("path");
const mongoose = require('mongoose');
const NonProfit = mongoose.model("NonProfit");

module.exports = function(app) {
    // Load index page
    app.get("/api/nonprofit/:id", function (req, res) {

        db.NonProfit.findById(req.params.id, function (err, result) {
            if (err) console.log(err)
            res.send(result).end()
        })
    });

    app.post("/api/create/nonprofit", function (req, res) {
        NonProfit.create({ image: req.body.image, name: req.body.name, address: req.body.address,
            description:req.body.description, contactName: req.body.contactName, contactNumber: req.body.contactNumber, website: req.body.website }, function (err, small) {
            if (err) console.log(err);
            // saved!
        });
        res.end()
    });

};