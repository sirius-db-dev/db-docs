-- migrate:up

create extension if not exists "uuid-ossp";

create schema api_data;

create table api_data.actors
(
    id         uuid primary key default uuid_generate_v4(),
    first_name text,
    last_name  text,
    birth_date date
);

create table api_data.films
(
    id          uuid primary key default uuid_generate_v4(),
    title       text,
    imdb_rating float,
    year        int
);

create table api_data.film_to_actor
(
    actor_id uuid references api_data.actors,
    film_id  uuid references api_data.films,
    primary key (actor_id, film_id)
);

insert into api_data.actors(first_name, last_name, birth_date)
values ('Том', 'Холланд', '1996-06-01'),
       ('Бенедикт', 'Камбербэтч', '1976-07-19'),
       ('Марк', 'Руффало', '1956-11-22'),
       ('Крис', 'Хемсворт', '1983-08-11'),
       ('Анастасия', 'Панина', '1983-01-15');

insert into api_data.films(title, imdb_rating, year)
values ('Человек-паук: Нет пути домой', 8.2, 2021),
       ('Мстители: Финал', 8.4, 2019),
       ('Тор: Рагнарёк', 7.9, 2017),
       ('Койяанискаци', 8.2, 1982);

insert into api_data.film_to_actor(actor_id, film_id)
values
    ((select id from api_data.actors where last_name = 'Холланд'),
     (select id from api_data.films where title = 'Человек-паук: Нет пути домой')),
    ((select id from api_data.actors where last_name = 'Холланд'),
     (select id from api_data.films where title = 'Мстители: Финал')),
    ((select id from api_data.actors where last_name = 'Камбербэтч'),
     (select id from api_data.films where title = 'Человек-паук: Нет пути домой')),
    ((select id from api_data.actors where last_name = 'Камбербэтч'),
     (select id from api_data.films where title = 'Мстители: Финал')),
    ((select id from api_data.actors where last_name = 'Руффало'),
     (select id from api_data.films where title = 'Тор: Рагнарёк')),
    ((select id from api_data.actors where last_name = 'Руффало'),
     (select id from api_data.films where title = 'Мстители: Финал')),
    ((select id from api_data.actors where last_name = 'Хемсворт'),
     (select id from api_data.films where title = 'Тор: Рагнарёк')),
    ((select id from api_data.actors where last_name = 'Хемсворт'),
     (select id from api_data.films where title = 'Мстители: Финал'));

-- migrate:down
