const Customer = require('./customer');
const Company = require('./company');
const Investmentchoice = require('./investmentchoice');
const Portfolio = require('./portfolio');
const Transaction = require('./transaction');

Portfolio.belongsTo(Customer);
Customer.hasMany(Portfolio);

Transaction.belongsTo(Company);
Company.hasMany(Transaction);

Customer.hasMany(Investmentchoice);
Investmentchoice.belongsTo(Customer);

Company.belongsTo(Investmentchoice);
Investmentchoice.hasMany(Company);

module.exports = {
  Customer,
  Company,
  Investmentchoice,
  Portfolio,
  Transaction
}
