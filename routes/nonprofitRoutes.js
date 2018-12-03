const path = require("path");
const db = require("../models")


module.exports = function(app) {
    // Load index page
    app.get("/api/nonprofit/:id", function (req, res) {
        db.NonProfit.findById(id, function (err, result) {

        })
    });

    app.post("/api/create/nonprofit", function (req, res) {
        res.end()
    });

};