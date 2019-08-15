'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
		  id: {
			  allowNull: false,
			  autoIncrement: true,
			  primaryKey: true,
			  type: Sequelize.INTEGER
		  },
		  nome: {
		  	allowNull: false,
			type: Sequelize.STRING
		  },
		  email: {
		  	allowNull: false,
			type: Sequelize.STRING
          },
		  isEstabelecimento: {
		  	allowNull: false,
			type: Sequelize.BOOLEAN
		  },
		  senha: {
		  	allowNull: false,
			type: Sequelize.STRING
		  },
		  dataNascimento: {
		  	allowNull: false,
			type: Sequelize.DATE
		  },
          cadastroPessoa: {
            allowNull: false,
            type: Sequelize.STRING
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
      return queryInterface.dropTable('users');
  }
};
