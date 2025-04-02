CREATE TABLE users
(
    id       integer                       NOT NULL,
    username character varying(25) UNIQUE  NOT NULL,
    password character varying(255) UNIQUE NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_username_key UNIQUE (username)
)

CREATE TABLE subscription
(
    id         integer UNIQUE,
    user_id    integer NOT NULL,
    subject_id integer NOT NULL,
    CONSTRAINT subscription_pkey PRIMARY KEY (id),
    CONSTRAINT subject_fkey FOREIGN KEY (subject_id)
        CONSTRAINT user_fkey FOREIGN KEY (user_id)
)

CREATE TABLE subject_task
(
    id          integer               NOT NULL,
    title       character varying(50) NOT NULL,
    description text,
    created_at  timestamp without time zone NOT NULL,
    deadline    timestamp without time zone NOT NULL,
    is_done     boolean,
    is_passed   boolean,
    subject_id  integer,
    CONSTRAINT subject_tasks_pkey PRIMARY KEY (id),
    CONSTRAINT subject_tasks_subject_id_fkey FOREIGN KEY (subject_id)

)

CREATE TABLE subject
(
    id         integer               NOT NULL,
    title      character varying(50) NOT NULL,
    created_at timestamp without time zone NOT NULL,
    user_id    integer,
    CONSTRAINT subjects_pkey PRIMARY KEY (id),
    CONSTRAINT subjects_user_id_fkey FOREIGN KEY (user_id)

)