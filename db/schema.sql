DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

\c bookmarks_dev;

CREATE TABLE bookmarks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 is_favorite BOOLEAN
);

-- Reviews table
-- Attributes? content, title, rating, reviewer,

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  reviewer TEXT,
  title TEXT,
  content TEXT,
  rating NUMERIC,
  CHECK ( rating >= 0 AND rating <= 5),
  bookmark_id INTEGER REFERENCES bookmarks (id)
  ON DELETE CASCADE
)

-- CREATE TABLE ratings (
--   id INT PRIMARY KEY,
--   title TEXT, 
--   rating INTEGER NOT NULL CHECK (rating >= 0 AND <= 5)
--   content varchar,
--   reviewer TEXT
-- );

-- INSERT INTO
--   ratings (title, rating, content, reviewer)

-- VALUES
-- ("")
