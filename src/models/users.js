'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    isEstabelecimento: DataTypes.BOOLEAN,
    senha: DataTypes.STRING,
    cadastroPessoa: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
