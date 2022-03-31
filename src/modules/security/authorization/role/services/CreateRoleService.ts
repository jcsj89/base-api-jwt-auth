import knex from '../../../../../database/connection';
import Role from '../model/Role';
import { v4 } from 'uuid';
import AppError from '../../../../../middleware/AppError';

interface IRequest {
  id?: string;
  role: string;
  description: string;
}

export default class CreateRoleService {
  public async execute({ role, description }: IRequest): Promise<Role> {
    const hasRole: Role[] = await knex
      .from('roles')
      .select('*')
      .where({ role: role });

    if (hasRole.length) {
      throw new AppError('Role alredy exists.');
    }

    const newRole: Role = {
      id: v4(),
      role: role.toUpperCase(),
      description,
    };

    try {
      await knex('roles').insert(newRole);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Role Service::error insert knex');
    }

    return newRole;
  }
}
