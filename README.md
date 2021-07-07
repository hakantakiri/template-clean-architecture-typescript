# Clean Arquitecture Typescript implementation

This is a simple implementation of the principles of clean architecture using Typescript.
This example implements HTTP Rest services using Express, and a database connection to Postgresql using `pg` library for node. 

## Running a postgresql db on docker
1. Install the image:
```
docker pull postgres
```

2. Running a container using the image..
```
docker run -p 5432:5432 -d \
    -e POSTGRES_PASSWORD=postgres \
    -e POSTGRES_USER=postgres \
    -e POSTGRES_DB=data \
    postgres
```
