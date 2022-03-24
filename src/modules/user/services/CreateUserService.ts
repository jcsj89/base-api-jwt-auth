import knex from '../../../database/connection';
import User from '../model/UserModel';
import { v4 } from 'uuid';
import bcrypt from 'bcryptjs';

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

    if (hasUser.length > 0) {
      throw new Error('Usuario ja exists');
    }

    const password_hash = await bcrypt.hash(password, 8);

    const user: User = {
      id: v4(),
      email,
      password_hash,
    };

    await knex('users').insert(user);

    return user;
  }
}
