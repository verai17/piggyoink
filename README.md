# Expense Tracker Application

This project is built in React JS for frontend, Node JS for backend, Sequelize ORM using Postgres. 

## Setup

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
 
 #### Node JS
 1. Install the dependencies. 
 ```
 cd backend
 npm install
 ```
 2. Run migration for the database schema.
 ```
 npx sequelize-cli db:migrate
 
 ```
 3. Run seed for static data used in the project. 
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

1. Sequelize Integration to NodeJs
```