import knex from '../../../../../database/connection';
import Resource from '../model/Resource';
import { v4 } from 'uuid';
import AppError from '../../../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
  name: string;
  action: string;
  endpoint: string;
  description: string;
}

export default class UpdateResourceService {
  public async execute({
    id,
    name,
    action,
    endpoint,
    description,
  }: IRequest): Promise<Resource> {
    // convert to upper case
    name = name.toLowerCase();

    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Update Resource Service:: Id is not valid.');

    // busca o resource com o id
    const hasResource: Resource = await knex('resources').where({ id }).first();

    // valida se encontrou o resource no banco
    if (!hasResource) {
      throw new AppError('UpdateResourceService:: Resource not exists.');
    }

    if (name.length < 4 || description.length < 4) {
      throw new AppError(
        'Update Resource Service:: name or description is not valid.',
      );
    }

    if (hasResource.name === name) hasResource.name = name;

    //name diferente
    if (hasResource.name !== name) {
      const resources: Resource[] = await knex('resources').where({ name });
      if (resources.length !== 0)
        throw new AppError('Update Resource Service:: name is already in use.');
    }

    // valida o tamanho do description
    description.length >= 4 ? (hasResource.description = description) : null;

    hasResource.name = name;

    try {
      //atualiza o user depois das validacoes
      await knex('resources').where({ id: hasResource.id }).update(hasResource);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update Resource Service:: Error update knex');
    }

    return hasResource;
  }
}
