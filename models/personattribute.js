'use strict';
module.exports = function(sequelize, DataTypes) {
  var PersonAttribute = sequelize.define('PersonAttribute', {
    PersonId: DataTypes.INTEGER,
    AttributeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        PersonAttribute.belongsTo(models.Attribute)
        PersonAttribute.belongsTo(models.Person)
      }
    }
  });
  return PersonAttribute;
};
