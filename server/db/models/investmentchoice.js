'use strict'

const db = require('../db');

const Investmentchoice = db.define('investmentchoice', {
  investmethod: {
    type: db.Sequelize.STRING,
    allowNull: false,
  }
})

module.exports = Investmentchoice;
