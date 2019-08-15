'use strict';
module.exports = (sequelize, DataTypes) => {
  const enderecos = sequelize.define('enderecos', {
    id: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    endereco: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon: DataTypes.DOUBLE
  }, {});
  enderecos.associate = function(models) {
      enderecos.belongsTo(models.users);
  };
  return enderecos;
};
