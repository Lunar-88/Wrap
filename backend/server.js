
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import booking from './models/booking.js';
import bookingRoutes from './routes/bookingRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

app.listen(PORT, () =>console.log(`Server is running on port ${PORT}`));