
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: `"Laser Wraps KE" <${process.env.EMAIL_USER}>`,
  to: process.env.BUSINESS_OWNER_EMAIL,
  subject: "🚨 Test Email from Booking System",
  text: "This is a test email. If you’re seeing this, email setup works!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.error("❌ Email failed:", err.message);
  } else {
    console.log("✅ Email sent:", info.response);
  }
});
