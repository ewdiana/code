create database mydb;

\c mydb;

CREATE TABLE books (
    id serial primary key,
    title varchar,
    genre_id bigint,
    publishing_year integer
);
