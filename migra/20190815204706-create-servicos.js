'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('servicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      tempoEstimado: {
        type: Sequelize.STRING
      },
      estabelecimentoId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'estabelecimentos',
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
    return queryInterface.dropTable('servicos');
  }
};
