Node.js Express API in Typescript For Jungle Devs

## Requirements

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

**Using Docker To Start Database**

Make a copy of `.env.docker` and save as `.env`.

```bash
$ cp .env.docker .env
```

Install dependencies and run the application locally.

```bash
$ docker-compose up -d postgres

```

Generate tables in database.
```bash
$ yarn run migrate
```

Load fake data in database.

```bash
$ yarn run seed
```

**To run the app on Docker**
```bash
$ docker-compose up -d api
```
Then access the API using the host configured at the .env file.


**To run the app locally acessing docker postgres**

Install the dependencies.

```bash
$ cp .env.example .env # Update database credentials

$ yarn
```

Generate tables in database.
```bash
$ yarn run migrate
```

Load fake data in database.

```bash
$ yarn run seed
```

Start the application.

```bash
$ yarn start # For development
```

**Run Jest Tests**
```
yarn test
```



