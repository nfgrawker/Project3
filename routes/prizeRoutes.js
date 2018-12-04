const path = require("path");
const mongoose = require('mongoose');
const Prize = mongoose.model("Prize");

module.exports = function(app) {
    // Load index page
    app.get("/api/prize/:id", function (req, res) {
        Prize.findById(id, function (err, result) {
            console.log(result)
        })
    });
    app.get("/api/prize/all/get", function (req,res) {
        Prize.find({},function(err, prizes){
            if (err) console.log(err);
            res.send(prizes).end()
        })
    });

    app.post("/api/create/prize", function (req, res) {
        Prize.create({ name: req.body.name, price: req.body.price, quantity: req.body.quantity,
            image: req.body.image,}, function (err, result) {
            if (err) console.log(err);
            else{
                console.log(result)
            }
        });
        res.end()
    });

};