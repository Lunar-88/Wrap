
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// GET all bookings - Enhanced with error handling
router.get("/", async (req, res) => {
  console.log("📢 GET /api/bookings endpoint hit");
  
  try {
    const bookings = await Booking.find().lean();
    console.log(`📦 Found ${bookings.length} bookings`);
    
    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
    
  } catch (err) {
    console.error("🔥 Error:", err);
    res.status(500).json({
      success: false,
      error: "Server Error"
    });
  }
});

// POST create booking - Enhanced validation
router.post("/", async (req, res) => {
  console.log("📢 POST /api/bookings request received");
  console.log("Request body:", req.body);

  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    
    console.log("✅ Booking created:", savedBooking._id);
    
    res.status(201).json({
      success: true,
      data: savedBooking
    });
    
  } catch (err) {
    console.error("🔥 Creation error:", err);
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
});

module.exports = router;