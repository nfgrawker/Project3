const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/User');
require('./models/Payment');
require('./models/User');
require('./models/Nonprofit');
require('./models/Prize');
require('./models/Raffle');
require('./config/passport-setup');
require('./models/Ticket');
const PORT = process.env.PORT || 3001;
const app = express();
const authRoutes = require('./routes/authRoutes');
const path = require('path');
const bodyParser = require('body-parser');
const axios= require('axios');



// set up session cookies
app.use(cookieSession({
    maxAge: 30* 24* 60 * 60 * 1000,
    keys: [process.env.sessioncookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(process.env.mongodbURI, () => {
    console.log('connected to mongodb');
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));

// set up routes
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);
require("./routes/api-routes")(app);
require("./routes/nonprofitRoutes")(app);
require("./routes/prizeRoutes")(app);
require("./routes/raffleRoutes")(app);
require("./routes/paypal-routes")(app);
require("./routes/ticketsRoutes")(app);

const HOST = process.env.WEB_HOST || "http://localhost:"+PORT ;
setInterval(()=>axios.get(HOST+"/api/winner/get",function(err, result){
    if (err) console.log(err)
    else{
        console.log("winner has run!")
    }
}),1000*60*5 );

// create home route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
}); 