const db = require('../db/config');

const Item = {};

Item.findAll = () => {
  return db.query('SELECT * FROM items ORDER BY id ASC');
};

module.exports = Item;
