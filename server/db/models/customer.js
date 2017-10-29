'use strict'

const db = require('../db');
const md5 = require('crypto-md5');

const Customer = db.define('customer', {
  firstname: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  lastname: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
},
{
  hooks: {
    beforeCreate( user ) {
      let password = user.password;
      user.password = md5( password, 'hex' );
    },
    beforeBulkCreate( users ) {
      users = users.map( user => {
        let password = user.password;
        user.password = md5( password, 'hex' );

      })
      return users;
    }
  }
})

module.exports = Customer;
