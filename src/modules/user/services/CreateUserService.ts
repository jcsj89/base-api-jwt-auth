import knex from '../../../database/connection';
import User from '../model/UserModel';
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';
import AppError from '../../../middleware/AppError';

interface IRequest {
  id?: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ email, password }: IRequest): Promise<User> {
    const hasUser: User[] = await knex
      .from('users')
      .select('*')
      .where({ email: email });

    if (hasUser.length) {
      throw new AppError('User alredy exists.');
    }

    const password_hash = await bcrypt.hash(password, 8);

    const user: User = {
      id: v4(),
      email,
      password_hash,
      isActive: true,
    };

    try {
      await knex('users').insert(user);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('CreateUserService::error insert knex');
    }

    return user;
  }
}
