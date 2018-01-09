const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.findOne = id => {
  return db.one(`SELECT * FROM users WHERE id = $1`, id)
}

User.findByGoogle = googleid => {
  return db.one(`SELECT * FROM users WHERE google_id = $1`, googleid)
}

// User.findByGoogleName = google_id => {
//   return db.oneOrNone(`
//     SELECT * FROM users
//     WHERE google_id = $1
//   `, [google_id]);
// };

User.create = user => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest)
    VALUES ($1, $2, $3)
    RETURNING *
  `, [user.username, user.email, user.password_digest]);
};

User.google = user => {
  return db.one(`
    INSERT INTO users(google_id)
    VALUES($1) RETURNING *`,
    user.google_id
    )
}

module.exports = User;
