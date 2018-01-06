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

itemController.edit = (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      res.render('edit', { item: item })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

itemController.update = (req, res) => {
  Item.update({
      title: req.body.title,
      description: req.body.description
    }, req.params.id)
    .then(() => {
      res.redirect(`/plan`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

itemController.new = (req, res) => {
  res.render('new')
};

itemController.create = (req, res) => {
  Item.create({
      title: req.body.title,
      description: req.body.description
    })
    .then(item => {
      res.redirect(`/plan`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

itemController.destroy = (req, res) => {
  Item.destroy(req.params.id)
    .then(() => {
      res.redirect('/plan')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = itemController;
