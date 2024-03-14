-- migrate:up

create table api_data.awards
(
    id       uuid primary key default uuid_generate_v4(),
    actor_id uuid references api_data.actors not null,
    title    text,
    year     int
);

insert into api_data.awards(actor_id, title, year)
values ((select id from api_data.actors where last_name = 'Холланд'), 'Сатурн', 2022),
       ((select id from api_data.actors where last_name = 'Холланд'), 'Британская академия', 2017),
       ((select id from api_data.actors where last_name = 'Камбербэтч'), 'Золотой глобус', 2022),
       ((select id from api_data.actors where last_name = 'Камбербэтч'), 'Эмми', 2018),
       ((select id from api_data.actors where last_name = 'Камбербэтч'), 'Оскар', 2015);

-- migrate:down
