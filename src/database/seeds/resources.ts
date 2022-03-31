import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('resources').del();

  // Inserts seed entries
  await knex('resources').insert([
    {
      id: uuidv4(),
      name: 'users',
      action: 'GET',
      endpoint: '/users',
      description: 'Listar todos os usuarios cadastrados.',
    },
    {
      id: uuidv4(),
      name: 'users',
      action: 'POST',
      endpoint: '/users',
      description: 'Cadastrar um novo usuario',
    },
    {
      id: uuidv4(),
      name: 'users',
      action: 'PUT',
      endpoint: '/users/:id',
      description: 'Alterar um usuario existente',
    },
  ]);
}
