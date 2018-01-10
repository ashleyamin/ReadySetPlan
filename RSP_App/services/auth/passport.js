const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/user');

// load the google auth variables
var configAuth = require('./google');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });

  passport.serializeUser((user, done) => {
    done(null, user.google_id);
  });

  passport.deserializeUser((googleid, done) => {
    User.findByGoogle(googleid)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });

//GOOD GOOGLE SIGN IN FROM TUTORIAL
  passport.use(new GoogleStrategy({

      clientID        : configAuth.googleAuth.clientID,
      clientSecret    : configAuth.googleAuth.clientSecret,
      callbackURL     : configAuth.googleAuth.callbackURL,
      passReqToCallback: true
  },
  function(req, token, refreshToken, profile, done) {
        User.google({
          google_id: profile.id
        })
        .then( user => {
          return done(null, user)
        })
        .catch( err => {
          console.log(err)
        })
  }));

}; // closes the module.exports
