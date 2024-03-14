FROM python:3.10.13

WORKDIR /flask_709_2

COPY app.py .
COPY requirements.txt .

RUN pip install -r requirements.txt