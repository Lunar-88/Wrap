
// models/Booking.js

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  plate: {
    type: String,
    required: true
  },
  car: {
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  wrapColor: {
    type: String,
    default: null
  },
  date: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Booking", bookingSchema);
