'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  friends.init({
    friendid: {
      primaryKey: true,
      allowNull: false,
      type:DataTypes.INTEGER},
    userid:{type:DataTypes.INTEGER,
      allowNull:false,},
    requestaccept: {type:DataTypes.BOOLEAN,
      allowNull:false,},
  }, {
    sequelize,
    modelName: 'friends',
  });
  return friends;
};