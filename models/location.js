const db = require('../db/config');

const Location = {};

Location.findAll = () => {
  return db.query('SELECT * FROM locations');
}

Location.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM locations WHERE id = $1`, [id])
}

module.exports = Location;
