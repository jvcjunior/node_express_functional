import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.string('category').notNullable()
    table.string('title').notNullable()
    table.string('summary').notNullable()
    table.string('firstParagraph').nullable()
    table.integer('authorId').notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()

    table.foreign('authorId').references('id').inTable('authors')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('articles')
}