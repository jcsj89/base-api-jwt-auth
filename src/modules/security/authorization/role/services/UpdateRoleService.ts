import knex from '../../../../../database/connection';
import Role from '../model/Role';
import AppError from '../../../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
  role: string;
  description: string;
}

export default class UpdateRoleService {
  public async execute({ id, role, description }: IRequest): Promise<Role> {
    // convert to upper case
    role = role.toUpperCase();

    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateRoleService:: Id is not valid.');

    // busca a role com o id
    const hasRole: Role = await knex('roles').where({ id }).first();

    // valida se encontrou a role no banco
    if (!hasRole) {
      throw new AppError('UpdateRoleService:: Role not exists.');
    }

    if (role.length < 4 || description.length < 4) {
      throw new AppError(
        'Update Role Service:: role or description is not valid.',
      );
    }

    if (hasRole.role === role) hasRole.role = role;

    //role diferente
    if (hasRole.role !== role) {
      const roles: Role[] = await knex('roles').where({ role });
      if (roles.length !== 0)
        throw new AppError('Update Role Service:: role is already in use.');
    }

    // valida o tamanho do description
    description.length >= 4 ? (hasRole.description = description) : null;

    hasRole.role = role;

    try {
      //atualiza o user depois das validacoes
      await knex('roles').where({ id: hasRole.id }).update(hasRole);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update Role Service:: Error update knex');
    }

    return hasRole;
  }
}
