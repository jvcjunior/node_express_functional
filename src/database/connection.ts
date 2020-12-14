import knex from 'knex';
import { Model }  from 'objection';
import config from '../config/config';

const dbConfig: knex.Config = config.db;
const db = knex(dbConfig)

// Give the knex instance to objection.
Model.knex(db);

export default db;
