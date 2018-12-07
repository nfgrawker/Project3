const path = require("path");
const mongoose = require('mongoose');
const NonProfit = mongoose.model("NonProfit");

module.exports = function(app) {
    // Load index page
    app.get("/api/nonprofit/all/get", function (req,res) {
        NonProfit.find({},function(err, nonprofit){
            if (err) console.log(err);
            res.send(nonprofit).end()
        })
    });

    app.get("/api/nonprofit/:id", function (req, res) {

        NonProfit.findById(req.params.id, function (err, result) {
            if (err) console.log(err)
            res.send(result).end()
        })
    });

    app.put('/api/update/nonprofit/:id', function (req, res) {
        NonProfit.findOneAndUpdate(req.params.id, { 
            $set: { 
                contactName: req.body.contactName ,
            }
        }, function(err, result) {
             if (err) console.log(err);
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
    app.post("/api/addadmin", function(req,res){

        NonProfit.findById(req.body.id,function (err, charity){
            if(err) console.log(err);
            charity.admins.push(req.body.user);
            charity.save();
            res.send("Completed!").end()
        })
    })
    app.get("/api/isadmin/:charityid/:userid", function(req, res){
        var isAdmin = false;

        NonProfit.findById(req.params.charityid).populate('admins').exec(function (err, nonprofit) {
            if (err) console.log(err);
            else{
                console.log(typeof nonprofit.admins[0].id);
                console.log(typeof req.params.userid);
                    if (nonprofit.admins[0].id == req.params.userid){
                        isAdmin = true
                    }
                }
            res.send(isAdmin).end()

        });
        });

    };

;