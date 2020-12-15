import * as dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      filename: process.env.DB_FILENAME,
      useNullAsDefault: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations',
      stub: 'src/resources/stubs/migration.stub'
    },
    seeds: {
      directory: 'src/database/seeds',
      stub: 'src/resources/stubs/seed.stub'
    }
  },
  production: {
    client: 'pg',
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      filename: process.env.DB_FILENAME,
      useNullAsDefault: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations',
      stub: 'src/resources/stubs/migration.stub'
    },
    seeds: {
      directory: 'src/database/seeds',
      stub: 'src/resources/stubs/seed.stub'
    }
  },
  test: {
    client: process.env.DB_CLIENT,
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      database: process.env.TEST_DB_NAME
    },
    migrations: {
      directory: 'src/database/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: 'src/database/seeds'
    }
  }
};