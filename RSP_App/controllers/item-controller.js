const Item = require('../models/item');
const Location = require('../models/location');

const itemController = {};

itemController.index = (req, res) => {
  Item.showLocationVenue()
    .then(items => {
      res.render('index', { items: items });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

// to show each item and the location name (instead of location ID)
// itemController.index = (req, res) => {
//   Item.findAll()
//     .then(items => {
//       Location.findAll()
//       .then(location => {
//         console.log(location)
//         res.render('index', { items: items, location: location })
//       })
//     .catch(err => {
//       console.log('location error', err)
//       res.status(400).json(err);
//     });
//   })
//     .catch(err => {
//       console.log('item error', err)
//       res.status(400).json(err);
//     });
// };

itemController.edit = (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      Location.findAll()
      .then(location => {
        res.render('edit', { item: item, location: location })
      })
    .catch(err => {
      res.status(400).json(err);
    });
  })
    .catch(err => {
      res.status(400).json(err);
    });
};

itemController.update = (req, res) => {
  Item.update({
      title: req.body.title,
      description: req.body.description,
      location_id: parseInt(req.body.location_id)
    }, req.params.id)
    .then(() => {
      res.redirect(`/plan`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

itemController.new = (req, res) => {
  Location.findAll()
    .then(location => {
      res.render('new', { location: location})
    })
    .catch(err => {
      res.status(400).json(err)
    })
};

itemController.create = (req, res) => {
  Item.create({
      title: req.body.title,
      description: req.body.description,
      location_id: req.body.location_id
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
