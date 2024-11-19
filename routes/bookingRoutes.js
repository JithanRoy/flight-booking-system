// routes/bookings.js
const express = require('express');
const router = express.Router();
const { authenticate, adminOnly } = require('../middlewares/auth');
const {
  createBooking,
  getUserBookings,
  getAllBookings,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');

// router.post('/', authenticate, createBooking);
// router.get('/user/:id', authenticate, getUserBookings);
// router.get('/', authenticate, adminOnly, getAllBookings);
// router.put('/:id', authenticate, adminOnly, updateBooking);
// router.delete('/:id', authenticate, adminOnly, deleteBooking);

module.exports = router;