const db = require('../db/config');

const Item = {};

Item.findAll = () => {
  return db.query('SELECT * FROM items ORDER BY id ASC');
};

Item.findById = id => {
  return db.oneOrNone(`SELECT * FROM items WHERE id = $1`, [id]);
};

Item.update = (item, id) => {
  return db.none(
    `
      UPDATE items SET
      title = $1,
      description = $2
      WHERE id = $3
    `,
    [item.title, item.description, id]
  );
};

Item.create = item => {
  return db.one(
    `
      INSERT INTO items
      (title, description)
      VALUES ($1, $2) RETURNING *
    `,
    [item.title, item.description]
  );
};

Item.destroy = id => {
  return db.none(
    `
      DELETE FROM items
      WHERE id = $1
    `,
    [id]
  );
};


module.exports = Item;
