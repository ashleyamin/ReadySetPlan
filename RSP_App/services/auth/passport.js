const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').Strategy;
const User = require('../../models/user');

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
};

//google stuff
// const configAuth = require('./google');

// module.exports = function(passport) {
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });
//   passport.deserializeUser(function(id, done) {
//     User.findById(id, function(err, user) {
//       done(err, user);
//     });
//   });
// passport.use(new GoogleStrategy({
//   clientID : configAuth.googleAuth.clientID,
//   clientSecret : configAuth.googleAuth.clientSecret,
//   callbackURL : configAuth.googleAuth.callbackURL,
// },
// cuntion(token, refreshToken, profile, done){
//   process.nextTicket(function() {

//   })
// }))



// }
