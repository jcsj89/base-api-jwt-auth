import knex from '../../../database/connection';
import User from '../model/UserModel';
import bcrypt from 'bcryptjs';
import AppError from '../../../middleware/AppError';
import { isBoolean } from 'util';

interface IRequest {
  id: string;
  email: string;
  password: string;
  isActive: boolean;
}

export default class UpdateUserService {
  public async execute({
    id,
    email,
    password,
    isActive,
  }: IRequest): Promise<User> {
    const hasUser: User = await knex('users').where({ id }).first();

    if (!hasUser) {
      throw new AppError('User not exists.');
    }

    if (email === undefined || password === undefined) {
      throw new AppError('UpdateUserService::email or password is undefined');
    }

    // faz verificacoes de cada propriedade
    email.length > 5 ? (hasUser.email = email) : null;
    password.length >= 4
      ? (hasUser.password_hash = await bcrypt.hash(password, 8))
      : null;
    isActive === true ? (hasUser.isActive = true) : (hasUser.isActive = false);

    try {
      await knex('users').where({ id: hasUser.id }).update(hasUser);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('UpdateUserService::error update knex');
    }

    return hasUser;
  }
}
