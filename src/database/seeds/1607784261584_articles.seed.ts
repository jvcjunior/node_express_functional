import Knex from "knex"
const table = 'articles'

exports.seed = async function(knex: Knex) {
  await knex(table).del()
  return knex(table).insert([{
    category: 'Romance',
    title: 'Love never fails',
    summary: 'Great loev story',
    firstParagraph: 'Once upon a time...',
    body: 'So, we are going to live forever',
    author_id: 1,
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    category: 'Suspense',
    title: 'Suspense in the woods',
    summary: 'Great Suspense story',
    firstParagraph: 'Once upon a time...',
    body: 'So, we are not going to live forever',
    author_id: 2,
    created_at: new Date(),
    updated_at: new Date(),
  }])
}