'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({user,post}) {

      this.belongsTo(user,{foreignKey:'userid'});
      this.belongsTo(post,{foreignKey:'postid'});
      }
  };
  comments.init({
    commentid: {
      primaryKey: true,
      allowNull: false,
      type:DataTypes.INTEGER},
    postid: {type:DataTypes.INTEGER,
      allowNull:false,},
    userid:{type:DataTypes.INTEGER,
      allowNull:false,},
    commentcontent: {type:DataTypes.STRING,
      allowNull:false,},
  }, {
    sequelize,
    modelName: 'comments',
  });
  return comments;
};