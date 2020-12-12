import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.integer('roleId').nullable()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()

    table.foreign('roleId').references('id').inTable('roles')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}