import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile')[environment];

const connection = knex(config);

export default connection;

console.log('connnn');

async function teste() {
  const users = await connection('users').select('id');
  const roles = await connection('roles').select('id');

  const user_role = {
    id: users[0].id,
    user_id: users[0].id,
    role_id: roles[0].id,
  };
  connection.insert(user_role).into('user_role');
}

teste();
