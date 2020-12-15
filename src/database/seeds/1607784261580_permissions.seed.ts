import Knex from "knex"
// const data = require('./responsibility.json')
const table = 'permissions'

module.exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    code: 'get_article',
    description: 'Permission to get one article',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'get_articles',
    description: 'Permission to get articles',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'post_article',
    description: 'Permission to create article',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    code: 'put_article',
    description: 'Permission to get articles',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'delete_article',
    description: 'Permission to edit article',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'get_authors',
    description: 'Permission to get authors',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'get_author',
    description: 'Permission to get one author',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'post_author',
    description: 'Permission to create author',
    created_at: new Date(),
    updated_at: new Date(),
  },{
    code: 'put_author',
    description: 'Permission to edit author',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    code: 'delete_author',
    description: 'Permission to delete author',
    created_at: new Date(),
    updated_at: new Date(),
  }])
}