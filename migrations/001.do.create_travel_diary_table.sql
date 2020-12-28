CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    email VARCHAR (255) UNIQUE NOT NULL,
    password VARCHAR (225) NOT NULL
);

CREATE TABLE items (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    keyword VARCHAR (255) NOT NULL,
    category VARCHAR (255) NOT NULL,
    rating INTEGER DEFAULT 1 NOT NULL,
    cost INTEGER DEFAULT 1 NOT NULL,
    currency VARCHAR (255) NOT NULL,
    language VARCHAR (255) NOT NULL,
    type VARCHAR (255) NOT NULL,
    notes VARCHAR (255) NOT NULL,
    is_public INTEGER DEFAULT 0 NOT NULL
);