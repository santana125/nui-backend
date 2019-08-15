'use strict';
module.exports = (sequelize, DataTypes) => {
  const estabelecimentos = sequelize.define('estabelecimentos', {
    id: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cor: DataTypes.STRING,
    nota: DataTypes.FLOAT,
    valor: DataTypes.FLOAT,
    userId: DataTypes.INTEGER
  }, {});
  estabelecimentos.associate = function(models) {
      estabelecimentos.belongsTo(models.users);
  };
  return estabelecimentos;
};
