import knex from '../../../../../database/connection';
import Resource from '../model/Resource';
import { v4 } from 'uuid';
import AppError from '../../../../../middleware/AppError';

interface IRequest {
  id?: string;
  name: string;
  action: string;
  endpoint: string;
  description: string;
}

export default class CreateResourceService {
  public async execute({
    name,
    action,
    endpoint,
    description,
  }: IRequest): Promise<Resource> {
    const hasResource: Resource[] = await knex
      .from('resources')
      .select('*')
      .where({ name: name });

    if (hasResource.length) {
      throw new AppError('Resource alredy exists.');
    }

    const newResource: Resource = {
      id: v4(),
      name: name.toLowerCase(),
      action: action.toUpperCase(),
      endpoint,
      description,
    };

    try {
      await knex('resources').insert(newResource);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Resource Service::error insert knex');
    }

    return newResource;
  }
}
