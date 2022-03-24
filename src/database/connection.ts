import knex from 'knex';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexfile = require('./knexfile');

const environment = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile')[environment];

const connection = knex(config);

export default connection;
