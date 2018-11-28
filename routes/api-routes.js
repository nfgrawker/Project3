const path = require("path");



module.exports = function(app) {

    app.get('/api/currentuser', (req, res) => {
        res.send(req.user);


    });

    app.get('/api/logout', (req, res) =>{
        console.log(req.user," has logged out!");
        req.logout();
        res.redirect('/');
    });
};
