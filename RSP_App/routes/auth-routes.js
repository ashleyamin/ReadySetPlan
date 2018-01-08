const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

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

authRouter.get('/login/google',
  passport.authenticate('google'));

authRouter.get('/login/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

authRouter.get('/plan',
  require('connect-ensure-login').ensureLoggedIn(),
  function(req, res){
    res.render('index', { user: req.user });
  });

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
