'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({user,post}) {

      this.belongsTo(user,{foreignKey:'user_id'});
      this.belongsTo(post,{foreignKey:'post_id'});}
  };    
    
  
  
  reaction.init({
    reactionid: { 
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING},

    postid:{type:DataTypes.INTEGER,
      allowNull:false,},
    userid: {type:DataTypes.INTEGER,
      allowNull:false,},
    reacttype: {type:DataTypes.STRING,
      allowNull:false,},
   }, 
   {
    sequelize,
    modelName: 'reaction',
  });
  return reaction;
};