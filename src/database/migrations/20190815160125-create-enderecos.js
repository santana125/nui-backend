'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lat: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      lon: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
            }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('enderecos');
  }
};
