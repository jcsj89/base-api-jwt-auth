import { NextFunction, Request, Response } from 'express';

export default function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  //console.log(request);
  const url = request.url;
  const baseUrl = url.split('/');
  console.log(baseUrl);
  next();
}
