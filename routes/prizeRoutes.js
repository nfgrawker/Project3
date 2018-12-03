const path = require("path");
const db = require("../models")


module.exports = function(app) {
    // Load index page
    app.get("/api/prize/:id", function (req, res) {
        db.Raffle.findById(id, function (err, result) {
            console.log(result)
        })
    });

    app.post("/api/create/prize", function (req, res) {

    });

};