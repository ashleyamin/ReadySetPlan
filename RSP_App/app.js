//require dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;

//use dependencies
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

//configure ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Things are working!');
});

//all routes
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
