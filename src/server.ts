import 'pg';
import express from 'express';
import cors from 'cors';
import config from './config';
import routes from './routes';

import './database/db';

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
}

//SETUP ROUTES
app.use(routes);

// HANDLE NOT FOUND 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  //err.status = 404;
  err.message = 'error 404';
  next(err);
});

// HANDLE ALL KINDS OF ERROR (422, 401, 500, ...)
app.use(function (request, response, next) {
  // res.status(err.status || 500);
  // res.json({
  //   errors: {
  //     message: err.message,
  //     error: {},
  //   },
  // });
});

// STARTUP
app.listen(PORT, () => {
  console.log('Server Started on port ', PORT);
});
