# using a python small basic image
FROM python:3.8.13

# exposing our app port in docker internal network
EXPOSE 8000

# creates a dir for our application
WORKDIR /backend

# copy our requirements.txt file and install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# copy the rest of our application
COPY . .

CMD ["python","manage.py", "runserver", "0.0.0.0:8000"]