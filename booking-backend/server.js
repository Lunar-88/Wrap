
// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bookingRoutes = require("./routes/bookings");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


// server.js

app.get("/", (req, res) => {
  console.log("Root route hit");
  res.send("Backend is running ✅");
});


// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection failed:", err));
