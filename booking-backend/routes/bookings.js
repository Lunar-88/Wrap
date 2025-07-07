
const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");
const nodemailer = require("nodemailer");

// ✅ Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify transporter
transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Email transporter error:", err);
  } else {
    console.log("✅ Email transporter ready");
  }
});

router.post("/", async (req, res) => {
  console.log("📍 POST /api/bookings hit");

  try {
    const booking = new Booking(req.body);
    const saved = await booking.save();
    console.log("✅ Booking saved:", saved);

    const clientEmail = saved.ownerDetails?.email || saved.email;
    const ownerEmail = process.env.BUSINESS_OWNER_EMAIL;

    if (!clientEmail) {
      console.warn("⚠️ No client email found, skipping client email");
    }

    // 📧 Client email
    const clientMail = {
      from: `"Laser Wraps KE" <${process.env.EMAIL_USER}>`,
      to: clientEmail,
      subject: "🎉 Your Car Wrap Booking is Confirmed!",
      html: `
        <h2>Hi ${saved.name},</h2>
        <p>Thanks for booking with Laser Wraps KE. Here are your details:</p>
        <ul>
          <li><strong>Car:</strong> ${saved.car}</li>
          <li><strong>Service:</strong> ${saved.service}</li>
          <li><strong>Color:</strong> ${saved.wrapColor || "N/A"}</li>
          <li><strong>Date:</strong> ${new Date(saved.date).toLocaleDateString()}</li>
          <li><strong>Plate:</strong> ${saved.plate}</li>
        </ul>
        <p>We’ll contact you soon to confirm everything.</p>
        <p>– Laser Wraps KE</p>
      `,
    };

    // 📧 Owner notification
    const ownerMail = {
      from: `"Laser Wraps KE System" <${process.env.EMAIL_USER}>`,
      to: ownerEmail,
      subject: `📥 New Booking from ${saved.name}`,
      html: `
        <h3>New Booking Received</h3>
        <ul>
          <li><strong>Name:</strong> ${saved.name}</li>
          <li><strong>Email:</strong> ${saved.email}</li>
          <li><strong>Phone:</strong> ${saved.phone}</li>
          <li><strong>Car:</strong> ${saved.car}</li>
          <li><strong>Service:</strong> ${saved.service}</li>
          <li><strong>Color:</strong> ${saved.wrapColor || "N/A"}</li>
          <li><strong>Date:</strong> ${new Date(saved.date).toLocaleString()}</li>
          <li><strong>Plate:</strong> ${saved.plate}</li>
        </ul>
      `,
    };

    // ✅ Send emails
    if (clientEmail) {
      await transporter.sendMail(clientMail);
      console.log("📤 Sent email to client:", clientEmail);
    }

    await transporter.sendMail(ownerMail);
    console.log("📤 Sent email to owner:", ownerEmail);

    res.status(201).json({ message: "Booking created and emails sent", booking: saved });
  } catch (err) {
    console.error("❌ Booking error:", err.message);
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
