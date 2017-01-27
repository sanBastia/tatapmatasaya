'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    PersonId: DataTypes.INTEGER,
    AttributeId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Answer.belongsTo(models.Attribute)
        Answer.belongsTo(models.Person)
      }
    }
  });
  return Answer;
};
