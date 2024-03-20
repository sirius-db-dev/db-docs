Запуск:

`docker compose up`

Запуск в detach моде (без прикрепления к терминалу):

`docker compose up -d`

Остановка:

`docker compose stop`

Остановка и удаление контейнеров:

`docker compose down`

Запуск с перебилдом (нужно когда изменили app.py или requirements.txt):

`docker compose up --build`

Запуск сервисов отдельно:

`docker compose up postgres migrator -d`

Для того, чтобы запустить `flask` через консоль или дебаггер, нужно в папке с проектом выполнить следующие команды:
```shell
python3 -m venv venv
. ./venv/bin/activate
pip install -r requirements.txt
python app.py
```
