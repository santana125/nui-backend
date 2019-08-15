'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estabelecimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      nota: {
        type: Sequelize.FLOAT
      },
      valor: {
        type: Sequelize.FLOAT
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key:'id'
        },
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
    return queryInterface.dropTable('estabelecimentos');
  }
};
