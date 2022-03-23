import knexfile from './knexfile';
import knex from 'knex';
import { env } from '../config';

const conn = [];

env === 'development'
  ? knex(knexfile['development'])
  : knex(knexfile['production']);

export default knex;
