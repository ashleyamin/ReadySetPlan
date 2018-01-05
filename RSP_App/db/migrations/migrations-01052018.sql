\c precrisis_checklist

CREATE TABLE IF NOT EXISTS items (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(75),
  description VARCHAR(255),
  location_id INTEGER REFERENCES locations(id),
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS locations (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  title TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);
