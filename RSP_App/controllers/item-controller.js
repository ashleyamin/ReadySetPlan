const Item = require('../models/item');

const itemController = {};

itemController.index = (req, res) => {
  Item.findAll()
    .then(items => {
      res.render('index', { items: items });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = itemController;
