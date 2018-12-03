const path = require("path");



module.exports = function(app) {
    // Load index page
    app.get("/api/userRaffle", function(req, res) {

    }
    });

    app.get("/front", loggedin,  function(req,res) {
        res.sendFile(path.join(__dirname, '../public', 'index.html'))
    });

    app.get("/signup", isManager, function(req,res) {
        console.log("signup page!");
        res.sendFile(path.join(__dirname, '../public', 'signup.html'))
    });
