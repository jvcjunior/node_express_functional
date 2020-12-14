import Knex from "knex"
// const data = require('./responsibility.json')
const table = 'rolePermissions'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    code: 'get_article',
    roleId: 1,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'get_articles',
    roleId: 1,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'post_article',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    roleId: 1,
    code: 'put_article',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'delete_article',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'get_authors',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'get_author',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'post_author',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    roleId: 1,
    code: 'put_author',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    roleId: 1,
    code: 'delete_author',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}