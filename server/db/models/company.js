'use strict'

const db = require('../db');

const Company = db.define('company', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  ticker: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  industry: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  sector:{
    type: db.Sequelize.STRING,
    allowNull: false,
  }

})

module.exports = Company;
