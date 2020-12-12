import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('rolePermissions', table => {
    table.string('code').primary().notNullable()
    table.integer('roleId').primary().notNullable()
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()
    
    table.foreign('code').references('code').inTable('permissions')
    table.foreign('roleId').references('id').inTable('roles')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('rolePermissions')
}