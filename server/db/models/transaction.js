'use strict'

const db = require('../db');

const Transaction = db.define('transaction', {
  amount: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
  },
  category: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  companyname: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  purchasedate:{
    type: db.Sequelize.DATE,
    allowNull: false,
  }

})

module.exports = Transaction;
