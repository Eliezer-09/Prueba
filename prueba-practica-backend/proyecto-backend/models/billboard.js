const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./movie');
const Room = require('./room');

const Billboard = sequelize.define('Billboard', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false
  }
});

Billboard.belongsTo(Movie);
Billboard.belongsTo(Room);

module.exports = Billboard;
