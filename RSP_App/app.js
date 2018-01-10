//require dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

require('dotenv').config();

// static files
app.use(express.static('public'));

//use dependencies
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

//configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Things are working!');
});

//required for passport
app.use(session({
  secret: process.env.SESSION_KEY,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

//authorization routes
const authRouter = require('./routes/auth-routes');
app.use('/auth', authRouter);

const authHelpers = require('./services/auth/auth-helpers');
app.use(authHelpers.loginRequired)


//all other routes
const itemRouter = require('./routes/item-routes');
app.use('/plan', itemRouter)

//404 route
app.get('*', (req, res) => {
  res.status(404).send('this is not the right place')
})

//keep at the bottom
app.listen(PORT, () => {
  console.log(`Up and running. Listening on port ${PORT}`);
});
