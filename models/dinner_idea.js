'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dinner_idea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      dinner_idea.belongsTo(models.User, {
        foreignKey: 'userID',
        onDelete: 'CASCADE'
      })
    }
  };
  dinner_idea.init({
    name: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dinner_idea',
  });
  return dinner_idea;
};