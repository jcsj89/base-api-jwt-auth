import { Model, DataTypes } from '@sequelize/core';
import sequelize from '../db';

export default class ProductModel extends Model {}

ProductModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
    },
    estoque: {
      type: DataTypes.INTEGER,
    },
    descricao: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Produtos',
  },
);
