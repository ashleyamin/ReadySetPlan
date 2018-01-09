const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/user');

// load the google auth variables
var configAuth = require('./google');

module.exports = () => {
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

//   passport.use(new GoogleStrategy({
//     clientID: '455936992651-vih6k5il0gqokmnkbfdpqfuc5u2k89mu.apps.googleusercontent.com',
//     clientSecret: 'QJ23aEcMNuvDEv7zoj3_V55Y',
//     callbackURL: "http://localhost:7000/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

//GOOD GOOGLE SIGN IN FROM TUTORIAL
  passport.use(new GoogleStrategy({

      clientID        : configAuth.googleAuth.clientID,
      clientSecret    : configAuth.googleAuth.clientSecret,
      callbackURL     : configAuth.googleAuth.callbackURL,
      passReqToCallback: true
  },
  function(req, token, refreshToken, profile, done) {

      // make the code asynchronous
      // User.findOne won't fire until we have all our data back from Google
      // process.nextTick(function() {

        User.google({
          google_id: profile.id
        })
        .then( user => {
          return done(null, user)
        })
        .catch( err => {
          console.log(err)
        })

          // try to find the user based on their google id
          // User.findByGoogle(profile.id, function(err, user) {
          //     if (err) return done(err);

          //     if (user) {

          //         // if a user is found, log them in
          //         return done(null, user);
          //     } else {
          //         // if the user isnt in our database, create a new user
          //        User.google({
          //         google_id: profile.id
          //        }).then( user => {
          //         res.redirect('/plan')
          //        }).catch( err => {
          //         console.log(err)
          //        })
          //     }
          // });
      // });
  }));

}; // closes the module.exports
