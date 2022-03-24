import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV !== 'development' ? '.env' : '.env.dev',
});

export default {
  secret: process.env.APP_SECRET,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  token: process.env.JWT_SECRET,
  tokenTest: process.env.JWT_TEST_SECRET,
};

// connection to database
const database = {
  url: process.env.DB_URL,
};

module.exports = database;

export const env = process.env.NODE_ENV || 'development';
