
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware - logs all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
const bookingsRouter = require("./routes/bookings");
app.use("/api/bookings", bookingsRouter);  // Fixed mounting path

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ 
    status: "running",
    message: "Laser Wraps Booking API",
    timestamp: new Date()
  });
});

// MongoDB connection (modern version - removed deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("Available routes:");
  console.log("- GET /api/bookings");
  console.log("- POST /api/bookings");
});