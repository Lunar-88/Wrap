
import express from 'express';
import { getBookings, createBooking, deleteBooking } from '../controllers/bookingController.js';

const router = express.Router();
// Route to get all bookings

router.post('/bookings', createBooking);

router.get('/bookings', getBookings);

router.delete('/bookings/:id', deleteBooking);

// Export the router
export default router;