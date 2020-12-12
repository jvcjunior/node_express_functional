import Knex from "knex"
const crypto = require('crypto')
const table = 'users'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    name: 'Valtim Junis',
    email: 'valtim@gmail.com',
    roleId: 1,
    password: crypto.createHmac('sha256', '123456').digest('hex'),
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    roleId: 2,
    password: crypto.createHmac('sha256', '123456').digest('hex'),
    created_at: new Date(),
    updated_at: new Date(),
  }])
}