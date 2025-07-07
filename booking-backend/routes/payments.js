
// backend/routes/payments.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// ✅ Load Paystack secret key from environment variables
const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;

router.post('/verify-payment', async (req, res) => {
  const { reference, bookingData } = req.body;

  if (!reference) {
    return res.status(400).json({ error: 'Payment reference is required' });
  }

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
      },
    });

    const data = response.data.data;

    if (data.status === 'success') {
      // ✅ Save booking info here if needed
      // Example:
      // const newBooking = new Booking({ ...bookingData, paymentRef: reference });
      // await newBooking.save();

      return res.status(200).json({
        status: 'success',
        message: 'Payment verified successfully',
        data,
      });
    }

    return res.status(400).json({
      status: 'failed',
      error: 'Payment verification failed',
      data,
    });
  } catch (error) {
    console.error('Error verifying payment:', error?.response?.data || error.message);
    return res.status(500).json({ error: 'An error occurred while verifying the payment' });
  }
});

module.exports = router;
