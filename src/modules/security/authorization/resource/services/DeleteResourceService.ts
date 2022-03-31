import knex from '../../../../../database/connection';
import Resource from '../model/Resource';
import AppError from '../../../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteResourceService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Delete Resource Service:: Id is not valid.');

    const hasResource: Resource = await knex('resources').where({ id }).first();

    if (!hasResource) throw new AppError('Resource not exists.');

    try {
      await knex('resources').where({ id: hasResource.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Delete Resource Service::error update knex');
    }

    const message = { message: 'Resource deleted.' };

    return message;
  }
}
