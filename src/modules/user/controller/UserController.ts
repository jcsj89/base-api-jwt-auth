import { Request, Response } from 'express';

export default class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json({ message: 'ok' });
  }
}
