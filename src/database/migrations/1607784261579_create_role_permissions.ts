import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('rolePermissions', table => {
    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now())
    table.dateTime('updated_at').nullable()
    
    table.string('code').references('code').inTable('permissions')
    table.integer('roleId').references('id').inTable('roles')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('rolePermissions')
}