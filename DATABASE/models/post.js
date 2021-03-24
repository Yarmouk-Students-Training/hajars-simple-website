'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({user,comments,reaction}) {

      this.belongsTo(user,{foreignKey:'useridd'});
      this.belongsTo(comments,{foreignKey:'postidd'});
      this.belongsTo(reaction,{foreignKey:'postidd'});
      }
  };  
  
  post.init({
    postid:{
      primaryKey: true,
      allowNull: false,
      type:DataTypes.INTEGER},
    usrtid:{type:DataTypes.INTEGER,
      allowNull:false,},
    postcontent: {type:DataTypes.STRING,
      allowNull:false,},
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};