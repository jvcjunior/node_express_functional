import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('roles', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('description').notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('roles')
}