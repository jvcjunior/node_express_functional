import knex from 'knex';
import { Model }  from 'objection';
import knexfile from '../../knexfile'

const environment = process.env.NODE_ENV || 'development'

//@ts-ignore
const dbConfig: knex.Config = knexfile[environment];

const db = knex(dbConfig)

// Give the knex instance to objection.
Model.knex(db);

export default db;
