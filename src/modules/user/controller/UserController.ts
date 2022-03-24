import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';



export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListUserService();

    const users = await service.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const service = new CreateUserService();

    const user = {
      email,
      password,
    };

    const inserted = await service.execute(user);

    return response.json(inserted);
  }
}
