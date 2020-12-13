import Knex from "knex"
const crypto = require('crypto')
const table = 'authors'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    name: 'Clarice Lispector',
    picture: 'clarice.s3.amazon.com',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Paulo da Silva',
    picture: 'paulo.s3.amazon.com',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}