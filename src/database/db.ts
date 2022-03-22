import Sequelize from '@sequelize/core';
import config from '../config'

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
  );//editar

(async () => {
    
  // const Produto = require('./database/models/Produto');

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log('config :',process.env.DB_PASSWORD, process.env.DB_USERNAME)

  try {
      const resultado = await sequelize.sync();
      console.log('sync ok');

  } catch (error) {
      console.log(error);
  }
})();

export default sequelize;
