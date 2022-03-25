import knex from '../../../database/connection';
import User from '../model/UserModel';
import AppError from '../../../middleware/AppError';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteUserService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    const hasUser: User = await knex('users').where({ id }).first();

    if (!hasUser) {
      throw new AppError('User not exists.');
    }

    try {
      await knex('users').where({ id: hasUser.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('UpdateUserService::error update knex');
    }

    const userDeleted = { message: 'User deleted.' };
    return userDeleted;
  }
}
