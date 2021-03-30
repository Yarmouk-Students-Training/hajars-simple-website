'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({post,comments,reaction,friends}) {
      // define association here
      this.hasMany(post,{foreignKey:'userid'})
      this.hasMany(comments,{foreignKey:'userid'})
      this.hasMany(reaction,{foreignKey:'userid'})
      this.belongsToMany(this,{through:friends, as:'friendidd',foreignKey:'userid' })
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  };
  user.init({ 
    userid:{
      primaryKey: true,
      allowNull: false,
      type:DataTypes.INTEGER},
    firstname:{type:DataTypes.STRING,
      allowNull:false,},
    lastname:{type:DataTypes.STRING,
      allowNull:false,},
    email: {type:DataTypes.STRING,
      allowNull:false,
      isEmail:true},
    gender: {type:DataTypes.STRING,
      allowNull:false,},
    dateofbirth:{type:DataTypes.DATE,
      allowNull:false,},
    phonenumber:{type:DataTypes.INTEGER,
      allowNull:false,},
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};