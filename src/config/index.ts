import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV !== 'devlopment' ? '.env' : '.env.dev',
});

export default {
  secret: process.env.APP_SECRET,
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  token: process.env.JWT_SECRET,
  tokenTest: process.env.JWT_TEST_SECRET,
  // database config
  database: {
    url: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}
    @${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` 
  },
};
