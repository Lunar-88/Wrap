
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  console.log("📍 POST /api/bookings route hit");

  try {
    console.log("📥 Incoming booking:", req.body);

    const booking = new Booking(req.body);
    const saved = await booking.save();
    console.log("✅ Booking saved:", saved);

    const clientEmail = saved.ownerDetails?.email || req.body.ownerDetails?.email;
    const clientName = saved.ownerDetails?.name || "Client";
    const clientPhone = saved.ownerDetails?.phone || "N/A";
    const clientPlate = saved.ownerDetails?.plate || "N/A";
    const ownerEmail = process.env.BUSINESS_OWNER_EMAIL;
    const car = saved.car || `${saved.carDetails?.brand || "Unknown"} ${saved.carDetails?.model || ""}`;

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("🔐 Using email user:", process.env.EMAIL_USER);
    console.log("📧 Client email will be sent to:", clientEmail);
    console.log("📩 Owner email will be sent to:", ownerEmail);

    // Email to client
    const clientMail = {
      from: `"Laser Wraps KE" <${process.env.EMAIL_USER}>`,
      to: clientEmail,
      subject: "🎉 Your Car Wrap Booking is Confirmed!",
      html: `
        <h2>Hi ${clientName},</h2>
        <p>Thank you for booking with <strong>Laser Wraps KE</strong>. Here are your booking details:</p>
        <ul>
          <li><strong>Car:</strong> ${car}</li>
          <li><strong>Service:</strong> ${saved.service}</li>
          <li><strong>Color:</strong> ${saved.wrapColor || "N/A"}</li>
          <li><strong>Date:</strong> ${new Date(saved.date).toLocaleDateString()}</li>
          <li><strong>Plate:</strong> ${clientPlate}</li>
        </ul>
        <p>We’ll contact you shortly to confirm the details.</p>
        <p>— Laser Wraps KE Team</p>
      `,
    };

    // Email to owner
    const ownerMail = {
      from: `"Laser Wraps KE System" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      subject: `📥 New Booking from ${clientName}`,
      html: `
        <h3>New Booking Received</h3>
        <ul>
          <li><strong>Name:</strong> ${clientName}</li>
          <li><strong>Email:</strong> ${clientEmail}</li>
          <li><strong>Phone:</strong> ${clientPhone}</li>
          <li><strong>Car:</strong> ${car}</li>
          <li><strong>Service:</strong> ${saved.service}</li>
          <li><strong>Color:</strong> ${saved.wrapColor || "N/A"}</li>
          <li><strong>Date:</strong> ${new Date(saved.date).toLocaleString()}</li>
          <li><strong>Plate:</strong> ${clientPlate}</li>
        </ul>
      `,
    };

    // Send email to client
    try {
      console.log("📤 Sending email to client...");
      await transporter.sendMail(clientMail);
      console.log("✅ Email sent to client:", clientEmail);
    } catch (clientErr) {
      console.error("❌ Failed to send email to client:", clientErr.message);
    }

    // Send email to owner
    try {
      console.log("📤 Sending email to owner...");
      await transporter.sendMail(ownerMail);
      console.log("✅ Notification sent to owner:", ownerEmail);
    } catch (ownerErr) {
      console.error("❌ Failed to send email to owner:", ownerErr.message);
    }

    res.status(201).json({ message: "Booking created and emails attempted", booking: saved });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
