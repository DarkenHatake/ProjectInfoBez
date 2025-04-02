CREATE TABLE users
(
    id       serial UNIQUE,
    username character varying(25) UNIQUE  NOT NULL,
    password character varying(255) UNIQUE NOT NULL
);

CREATE TABLE subject
(
    id         serial UNIQUE,
    title      character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    user_id integer references users(id) ON DELETE CASCADE
);

CREATE TABLE subscription
(
    id         serial UNIQUE,
    user_id integer references users(id) ON DELETE CASCADE,
    subject_id integer references subject(id) ON DELETE CASCADE
);

CREATE TABLE subject_task
(
    id          serial UNIQUE,
    title       character varying(50) NOT NULL,
    description text,
    created_at  timestamp without time zone NOT NULL,
    deadline    timestamp without time zone NOT NULL,
    is_done     boolean,
    is_passed   boolean,
    subject_id integer references subject(id) ON DELETE CASCADE

);

