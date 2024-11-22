const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const userRoutes = require('./routes/authRoutes');
const flightRoutes = require('./routes/flightRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');

const app = express();
// Load environment variables

dotenv.config();
// Connect to MongoDB

connectDB();
app.use(cors());

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api/flights', flightRoutes);
// app.use('/api/bookings', bookingRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong', details: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
