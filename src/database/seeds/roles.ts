import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('roles').del();

  // Inserts seed entries
  await knex('roles').insert([
    {
      id: uuidv4(),
      role: 'ADMIN',
      description: 'Tem acesso ilimitado.',
    },
    {
      id: uuidv4(),
      role: 'MANAGER',
      description: 'Tem acesso a algumas rotas',
    },
    {
      id: uuidv4(),
      role: 'SELLER',
      description: 'Tem acesso a algumas rotas especificas.',
    },
  ]);
}
