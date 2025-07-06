
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookings");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

// API route
app.use("/api/bookings", bookingRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
  });

