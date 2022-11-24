//This will be one form for both buyer and grower. They can choose based on true false

const { Model, DataTypes, BOOLEAN } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  validatePassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

User.init(
  {
    
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,

    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    //designate a toggle to bifurcate to either a grower or buyer page in handelbars
    is_grower: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    //Should only be able to buy and sell based on corresponding zipcode or city(?)
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
// Should I include messaging, (if)producing or not producing(afk)?
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 8);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 8);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;