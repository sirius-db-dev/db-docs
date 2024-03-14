from flask import Flask
import psycopg2
from psycopg2.extras import RealDictCursor
from flask import request
from psycopg2.sql import SQL, Literal
from dotenv import load_dotenv
import os

load_dotenv()


app = Flask(__name__)
app.json.ensure_ascii = False

connection = psycopg2.connect(
    host=os.getenv('POSTGRES_HOST') if os.getenv('DEBUG_MODE') == 'false' else 'localhost',
    port=os.getenv('POSTGRES_PORT'),
    database=os.getenv('POSTGRES_DB'),
    user=os.getenv('POSTGRES_USER'),
    password=os.getenv('POSTGRES_PASSWORD'),
    cursor_factory=RealDictCursor
)
connection.autocommit = True


@app.get("/")
def hello_world():
    return "<p>Hello, World!</p>"


@app.get("/actors")
def get_actors():
    query = """
with
  actors_with_films as (
	select
	  a.id,
	  a.first_name,
	  a.last_name,
	  a.birth_date,
	  coalesce(jsonb_agg(jsonb_build_object(
	    'id', f.id, 'title', f.title, 'imdb_rating', f.imdb_rating))
	      filter (where f.id is not null), '[]') as films
	from api_data.actors a
	left join api_data.film_to_actor af on a.id = af.actor_id
	left join api_data.films f on f.id = af.film_id
	group by a.id
  ),
  actors_with_awards as (
	select
	  ac.id,
	  coalesce(json_agg(json_build_object(
	    'id', aw.id, 'title', aw.title, 'year', aw.year))
	      filter (where aw.id is not null), '[]')
	        as awards
	from api_data.actors ac
	left join api_data.awards aw on ac.id = aw.actor_id
	group by ac.id
  )
select awf.id, first_name, last_name, birth_date, films, awards
from actors_with_films awf
join actors_with_awards awa on awf.id = awa.id
"""

    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()

    return result


@app.post('/actors/create')
def create_actor():
    body = request.json

    first_name = body['first_name']
    last_name = body['last_name']
    birth_date = body['birth_date']

    query = SQL("""
insert into api_data.actors(first_name, last_name, birth_date)
values ({first_name}, {last_name}, {birth_date})
returning id
""").format(first_name=Literal(first_name), last_name=Literal(last_name), birth_date=Literal(birth_date))

    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchone()

    return result


@app.post('/actors/update')
def update_actor():
    body = request.json

    id = body['id']
    first_name = body['first_name']
    last_name = body['last_name']
    birth_date = body['birth_date']

    query = SQL("""
update api_data.actors
set 
  first_name = {first_name}, 
  last_name = {last_name},
  birth_date = {birth_date}
where id = {id}
returning id
""").format(first_name=Literal(first_name), last_name=Literal(last_name),
            birth_date=Literal(birth_date), id=Literal(id))

    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()

    if len(result) == 0:
        return '', 404

    return '', 204


@app.delete('/actors/delete')
def delete_actor():
    body = request.json

    id = body['id']

    deleteActorLinks = SQL(
        "delete from api_data.film_to_actor where actor_id = {id}").format(
            id=Literal(id))
    deleteActor = SQL("delete from api_data.actors where id = {id} returning id").format(
        id=Literal(id))

    with connection.cursor() as cursor:
        cursor.execute(deleteActorLinks)
        cursor.execute(deleteActor)
        result = cursor.fetchall()

    if len(result) == 0:
        return '', 404

    return '', 204

if __name__ == '__main__':
    app.run(port=os.getenv('FLASK_PORT'))