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

3. Create `.env` file.

```
cp .env.sample .env
```

#### Postgres Database (Docker)

Install Docker [here](https://docs.docker.com/engine/install/).

Install Docker-Compose [here](https://docs.docker.com/compose/install/).

Once successfully installed, run `postgres` docker container.

```
docker-compose up -d
```

#### Node JS

1.  Install the dependencies.

```
cd backend
npm install
```

2.  Create `.env` file.

```
cp .env.sample .env
```

3.  Run migration for the database schema.

```
npx sequelize-cli db:migrate
```

4.  Run seed for static data used in the project.

```
npx sequelize-cli db:seed:all
```

---

## Run

1. Run project.

```
cd piggyoink
npm start
```

```
cd backend
npm start
```

2. Visit Application.

```
http://localhost:3000/
```
