import Knex from "knex"
// const data = require('./responsibility.json')
const table = 'permissions'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    code: 'get_article',
    description: 'Permission to get articles',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'post_article',
    description: 'Permission to create article',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}