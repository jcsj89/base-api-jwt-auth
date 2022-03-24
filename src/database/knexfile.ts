// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV !== 'development' ? '.env' : '.env.dev',
});

console.log(process.env.DB_URL);
module.exports = {
  development: {
    client: 'pg',
    connection: {
      connectionString: process.env.DB_URL,
    },
    migrations: {
      directory: path.resolve(__dirname, '..', 'database', 'migrations'),
    },
    useNullAsDefault: true,
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DB_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: path.resolve(__dirname, '..', 'database', 'migrations'),
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },
}[process.env.NODE_ENV || 'development'];
