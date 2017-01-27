'use strict';
module.exports = function(sequelize, DataTypes) {
  var Attribute = sequelize.define('Attribute', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Attribute.hasMany(models.Answer)
        Attribute.hasMany(models.PersonAttribute)
        Attribute.belongsToMany(models.Person,{through:'PersonAttribute'})
      }
    }
  });
  return Attribute;
};
