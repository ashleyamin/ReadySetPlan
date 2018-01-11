const db = require('../db/config');

const Item = {};

Item.findAll = () => {
  return db.query('SELECT * FROM items ORDER BY id ASC');
};

Item.showLocationVenue = () => {
  return db.query(
    `
      SELECT items.id, items.title, items.description, locations.title AS venue FROM locations
      JOIN items ON
      items.location_id = locations.id
      ORDER BY items.id ASC
    `
  );
};

Item.findById = id => {
  return db.oneOrNone(`SELECT * FROM items WHERE id = $1`, [id]);
};

Item.update = (item, id) => {
  return db.none(
    `
      UPDATE items SET
      title = $1,
      description = $2,
      location_id = $3
      WHERE id = $4
    `,
    [item.title, item.description, item.location_id, id]
  );
};

Item.create = item => {
  return db.one(
    `
      INSERT INTO items
      (title, description, location_id)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [item.title, item.description, item.location_id]
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
