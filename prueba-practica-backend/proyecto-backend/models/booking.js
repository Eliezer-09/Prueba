const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');
const Seat = require('./seat');
const Billboard = require('./billboard');

const Booking = sequelize.define('Booking', {
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Booking.belongsTo(Customer);
Booking.belongsTo(Seat);
Booking.belongsTo(Billboard);

module.exports = Booking;
