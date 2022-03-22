import {Sequelize, DataType, Model} from '@sequelize/core';
import sequelize from '../db';

export default class ProductModel extends Model {}

ProductModel.init({
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        // autoIncrement: true,
        // allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
},
{
    sequelize,
    modelName: 'Produtos'
});

