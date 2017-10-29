'use strict'
const path = require('path');
const Sequelize = require('sequelize');
const DATABASE_URI = require( path.join(__dirname, '../env' )).DATABASE_URI;

module.exports = new Sequelize( DATABASE_URI, {
  logging: false,
  native: true
});

