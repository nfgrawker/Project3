const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
require('dotenv').config();


const User = mongoose.model("User");


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
      clientID: process.env.googleclientID,
      clientSecret: process.env.googleclientSecret,
      callbackURL: "/auth/google/redirect"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken, refreshToken, profile)
      // check if user already exists in our own db
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // already have this user
          done(null, currentUser);
        } else {

          const ImgUrl = profile._json.image.url.replace("?sz=50", "")
          // if not, create user in our db
          new User({
              googleId: profile.id,
              username: profile.displayName,
              thumbnail: ImgUrl,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email: profile.emails[0].value,
              


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
