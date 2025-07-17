const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  console.log("📍 POST /api/bookings hit");

  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();
    console.log("✅ Booking saved:", saved);

    res.status(201).json({
      message: "Booking created successfully",
      booking: saved,
    });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

