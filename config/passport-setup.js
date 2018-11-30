const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
require('dotenv').config();


const User = mongoose.model("users");

process.env.googleId

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      clientID: process.ENV.googleclientID,
      clientSecret: process.ENV.googleclientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our own db
      console.log("Profile: ", profile);
      console.log("accessToken: ", accessToken);
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // already have this user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          new User({
            googleId: profile.id,
            username: profile.displayName,
            thumbnail: profile._json.image.url
          })
            .save()
            .then(user => {
              console.log("created new user: ", user);
              done(null, user);
            });
        }
      });
    }
  )
);
