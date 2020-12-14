import * as dotenv from 'dotenv';

import app from '../../package.json';

dotenv.config();

export default {
  name: app.name,
  version: app.version,
  db: {
    client: process.env.DB_CLIENT, //sqlite3, pg
    connection: {
      charset: 'utf8',
      timezone: 'UTC',
      host: process.env.DB_HOST,
      port: +(process.env.DB_PORT || '5432'),
      database:
        process.env.NODE_ENV === 'test'
          ? process.env.TEST_DB_NAME
          : process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      filename: process.env.DB_FILENAME,
      useNullAsDefault: true
    }
  }
}