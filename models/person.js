'use strict';
module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Person.hasMany(models.Answer)
        Person.hasMany(models.PersonAttribute)
        Person.belongsToMany(models.Attribute,{through:'PersonAttribute'})
      }
    }
  });
  return Person;
};
