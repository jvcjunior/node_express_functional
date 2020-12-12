import knex from 'knex';
import path from 'path';
import { Model }  from 'objection';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
})

// Give the knex instance to objection.
Model.knex(db);

export default db;
