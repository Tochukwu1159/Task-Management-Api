const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: true
});

module.exports = Task;