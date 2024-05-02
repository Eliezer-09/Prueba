const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Movie = sequelize.define('Movie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  allowedAge: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  lengthMinutes: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Movie;
