module.exports = {

    'googleAuth' : {
        'clientID'      : '455936992651-vih6k5il0gqokmnkbfdpqfuc5u2k89mu.apps.googleusercontent.com',
        'clientSecret'  : 'QJ23aEcMNuvDEv7zoj3_V55Y',
        'callbackURL'   : 'http://localhost:7000/auth/google/callback'
    }

};



// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const init = require('./passport');
// const User = require('../../models/user');
// const authHelpers = require('./auth-helpers');

// const options = {};

// init();

// passport.use(new GoogleStrategy({
//     clientID: '455936992651-vih6k5il0gqokmnkbfdpqfuc5u2k89mu.apps.googleusercontent.com',
//     clientSecret: 'QJ23aEcMNuvDEv7zoj3_V55Y',
//     callbackURL: "http://localhost:7000/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// module.exports = passport;
