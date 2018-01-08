const axios = require('axios');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.455936992651-vih6k5il0gqokmnkbfdpqfuc5u2k89mu.apps.googleusercontent.com,
    clientSecret: process.env.QJ23aEcMNuvDEv7zoj3_V55Y,
    callbackURL: "http://localhost:7000/plan" //what does this need to be?
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));




module.exports = passport;
