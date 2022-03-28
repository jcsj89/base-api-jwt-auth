import 'pg';
import 'express-async-errors';
import AppError from './middleware/AppError';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import routes from './routes';

import './database/connection';

//CONSTANTS
const PORT = config.port || 3333;

//EXEC
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//SETUP CORS
app.use(cors());

// STATIC FOLDERS
app.use('/public', express.static(__dirname + '/public'));

//DATABASE CONECTION
const isProduction = config.env === 'production';

if (isProduction) {
  console.log('DATABASE IN PRODUCTION [OK] - ', config.token);
} else {
  console.log('DATABASE IN DEVLOPMENT [OK] - ', config.tokenTest);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const teste = require('./tests/knex.test');
}

//SETUP ROUTES
app.use(routes);

// TRATAMENTO DE ERROS
app.use((error: Error, __: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'API Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error' + error,
  });
});

// STARTUP
app.listen(PORT, () => {
  console.log('Server Started on port ', PORT);
});
