import Knex from "knex"
const table = 'roles'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    id: 1,
    name: 'Admin',
    description: 'Admin Role',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    id: 2,
    name: 'Simple User',
    description: 'Basic Role',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}