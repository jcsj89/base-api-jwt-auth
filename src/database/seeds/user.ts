import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcryptjs';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: uuidv4(),
      email: 'jcsj2010@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
    },
    {
      id: uuidv4(),
      email: 'teste@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
    },
    {
      id: uuidv4(),
      email: 'jose@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
    },
  ]);
}
