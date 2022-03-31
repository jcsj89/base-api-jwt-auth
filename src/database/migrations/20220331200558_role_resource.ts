import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('role_resource', (table) => {
    table.uuid('resource_id').references('id').inTable('resources');
    table.uuid('role_id').references('id').inTable('roles');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('role_resource');
}
