# Expense Tracker Application

This project is built in React JS for frontend, Node JS for backend, Sequelize ORM using Postgres. 

## Setup

#### Postgres Database

For Postgres setup locally, reference [here](https://www.codecademy.com/article/installing-and-using-postgresql-locally).

For Postgres GUI Application, install [pgAdmin](https://www.pgadmin.org/download/).

Once successfully setup, create a new database `piggyoink` under public schema. 

#### React

1. Clone the project.

```
git clone https://github.com/verai17/piggyoink.git
```
2. Install the dependencies.

```
cd piggyoink
npm install
```
3. Create `.env` file.
```
cp .env.sample .env
```
 
 #### Node JS
 1. Install the dependencies. 
 ```
 cd backend
 npm install
 ```
 2. Create `.env` file.
```
cp .env.sample .env
```
 3. Run migration for the database schema.
 ```
 npx sequelize-cli db:migrate
 ```
 4. Run seed for static data used in the project. 
 ```
 npx sequelize-cli db:seed:all
 ```
 
---

## Run

1. Run project.

``` 
npm start
```

2. Visit Application.

```
http://localhost:3000/
```

## Todo

1. BE - Transactions
2. FE - Transactions
3. BE - Get All Saving Category
4. BE - Get All Expense Category
5. BE - Save Saving Category
6. BE - Save Expense Category
7. FE - Save Saving Category
8. FE - Save Expense Category
```