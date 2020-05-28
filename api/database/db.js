const Sequelize = require('sequelize');

const DB_NAME = 'fibonaccy';
const USER_NAME = 'root';
const PASSWORD = '123456';

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
  // host: 'localhost',
  host: '192.168.99.100',
  dialect: 'mysql',
});

module.exports = sequelize;
