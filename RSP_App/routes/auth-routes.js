const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

//passport sign-up; local database
authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/plan',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRouter.get('/plan',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('index', { user: req.user });
  });

// GOOGLE ROUTES
authRouter.get('/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

//the callback after google has authenticated the user
authRouter.get('/google/callback',
        passport.authenticate('google'),
        (req, res) =>{
          console.log('trying to redirect')
          res.redirect('/plan')
        });
//check to see if loggedin
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/plan');
};


//logout for local
authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth/login');
});

module.exports = authRouter;
