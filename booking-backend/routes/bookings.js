// routes/bookings.js
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

// POST a new booking
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming booking:", req.body); // log input
    const booking = new Booking(req.body);
    const saved = await booking.save();
    console.log("✅ Booking saved:", saved); // log what got saved
    res.status(201).json({ message: "Booking created", booking: saved });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ error: err.message });
  }
});


// GET all bookings
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single booking by ID
router.get("/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE a booking by ID
router.delete("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking deleted", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE a booking by ID
router.put("/:id", async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json({ message: "Booking updated", booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
