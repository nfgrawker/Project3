const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User')
require('./config/passport-setup')
const PORT = process.env.PORT || 3001;
const app = express();
const authRoutes = require("./routes/authRoutes");


app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 30* 24* 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// set up routes
app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes);
require("./routes/api-routes")(app);


// create home route

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
