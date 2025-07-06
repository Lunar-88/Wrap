
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\+?\d{7,15}$/, "Please enter a valid phone number"]
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  plate: {
    type: String,
    required: true,
    trim: true
  },
  car: {
    type: String,
    required: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
  wrapColor: {
    type: String,
    default: null,
    trim: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

// Optional: Custom validation for wrapColor
bookingSchema.pre("validate", function (next) {
  if (this.service === "Vinyl wrap" && !this.wrapColor) {
    this.invalidate("wrapColor", "Wrap color is required when service is 'Vinyl wrap'");
  }
  next();
});

module.exports = mongoose.model("Booking", bookingSchema);

