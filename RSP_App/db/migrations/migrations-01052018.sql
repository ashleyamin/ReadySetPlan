\c precrisis_checklist

CREATE TABLE IF NOT EXISTS locations (
  id SERIAL PRIMARY KEY,
  title TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  google_email VARCHAR(255) UNIQUE,
  email VARCHAR(255) UNIQUE,
  password_digest TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS items (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(75),
  description VARCHAR(255),
  location_id INTEGER,
  FOREIGN KEY(location_id) REFERENCES locations(id),
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
