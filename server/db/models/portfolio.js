'use strict'

const db = require('../db');

const Portfolio = db.define('portflio', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  company: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  ticker: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  shares: {
    type: db.Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  cost:{
    type: db.Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  },
  marketvalue:{
    type: db.Sequelize.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0
    }
  }

})

module.exports = Portfolio;
