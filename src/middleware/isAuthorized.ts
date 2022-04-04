import { NextFunction, Request, Response } from 'express';
import AppError from './AppError';
import knex from '../database/connection';

export default function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const user = request.user;

  if (!user) throw new AppError('User does not exist in the request.');

  if (user && user.isAdmin) {
    console.log('user: ', user);
    return next();
  }

  console.log('router.path', request.route.path);
  // const baseUrl = url.split('/');
  // console.log(baseUrl);

  next();
}
