const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const todo = sequelize.define('Fibonaccy', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  fibonaccy: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  order: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Date.now,
  },
  IP: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = todo;
