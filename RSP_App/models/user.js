const db = require('../db/config');

const User = {};

User.findByEmail = email => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE email = $1
  `, [email]);
};

User.create = user => {
  return db.one(`
    INSERT INTO users
    (email, password_digest)
    VALUES ($1, $2)
    RETURNING *
  `, [user.email, user.password_digest]);
};

module.exports = User;
