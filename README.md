Node.js Express API in Typescript For Jungle Devs

## Requirements

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Running the application - Development

**Run our app locally with sqlite database**
First, we need to install all depedencies:

```bash
yarn install or npm install
```
Once all dependencies are installed we now can run our application. 

The fastest way of run our app is using a sqlite database. First, we need to make a copy of `.env.sqlite.local` and save as `.env`

```bash
cp .env.sqlite.local .env
```
Then we need to create our tables and add initial data:

Generate tables in database:
```bash
yarn run migrate:dev
```

Load fake data in database:

```bash
yarn run seed:dev
```

Now, just execute:

```bash
yarn start:dev
```
Our app is going to be running using port 5000.

**Run our app locally with postgres database running on Docker**

Make a copy of `.env.docker.development` and save as `.env`.

```bash
cp docker/.env.docker.development .env
```

Install dependencies and run the application locally.

```bash
docker-compose -f docker/docker-compose.dev.yml up -d db 

```

Then we need to create our tables and add initial data:

Generate tables in database:
```bash
yarn run migrate:dev
```

Load fake data in database:

```bash
yarn run seed:dev
```

Now, just execute:

```bash
yarn start:dev
```
Our app is going to be running using port 5000.


**Run both our app and the database on Docker**

Make a copy of `.env.docker.development` and save as `.env`.

```bash
cp docker/.env.docker.development .env
```

Install dependencies and run the application locally.

```bash
docker-compose -f docker/docker-compose.dev.yml up -d

```

## Testing the application
it's really simple to test the aplpication see the results. You just need to run:

```bash
yarn test
```
## Running the application - Production

Make a copy of `.env.docker.production` and save as `.env`.

```bash
cp docker/.env.docker.production .env
```

TO run the app in prod you just need to run:
```bash
docker-compose -f docker/docker-compose.prod.yml up -d
```
After that, please run the following commands to create the database and run seeds:

```bash
docker exec -it api-prod yarn run migrate:prod
```

```bash
docker exec -it api-prod yarn run seed:prod
```












