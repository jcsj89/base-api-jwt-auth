import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile')[environment];

const connection = knex(config);

export default connection;

console.log('connnn');

/// testar many to many
async function teste() {
  const users = await connection('users').select('id');
  const roles = await connection('roles').select('id');

  const user_role = {
    user_id: users[1].id,
    role_id: roles[1].id,
  };
  //await connection('user_role').del();
  const insert = await connection('user_role').insert(user_role);

  const consult = await connection('users')
    .join('user_role', 'users.id', '=', 'user_id')
    .join('roles', 'user_role.role_id', '=', 'roles.id');
  console.log(consult);
}

teste();
