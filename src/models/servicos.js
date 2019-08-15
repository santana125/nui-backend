'use strict';
module.exports = (sequelize, DataTypes) => {
  const servicos = sequelize.define('servicos', {
    id: DataTypes.INTEGER,
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    categoria: DataTypes.STRING,
    tempoEstimado: DataTypes.STRING,
    estabelecimentoId: DataTypes.INTEGER
  }, {});
  servicos.associate = function(models) {
      servicos.belongsTo(models.estabelecimentos);
  };
  return servicos;
};
