'use strict';
const {
  Model
} = require('sequelize');
const { hashPasword } = require('../helper/bcrypt');
const { convertToToken } = require('../helper/jwt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Product, {
        through: 'Carts',
          as: 'productCart'
      })
      User.hasMany(models.Product, {
        foreignKey: 'AuthorId'
      })
      User.hasMany(models.Cart)
      User.hasMany(models.Preview)
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is Required'
        },
        notNull: {
          msg: 'Name cannot be null'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email is Required'
        },
        notNull: {
          msg: 'Email cannot be null'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is Required'
        },
        notNull: {
          msg: 'Password cannot be null'
        }
      }
    },
    noTelp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'No Telp is Required'
        },
        notNull: {
          msg: 'No Telp cannot be null'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance){
        instance.password = hashPasword(instance.password)
        let name = ""
        for (let i = 0; i < instance.name.length; i++) {
          if (i === 0 || instance.name[i - 1] === ' ') {
            name += instance.name[i].toUpperCase()
          } else {
            name += instance.name[i].toLowerCase()
          }
        }
        instance.name = name
      }
    },
    modelName: 'User',
  });
  return User;
};