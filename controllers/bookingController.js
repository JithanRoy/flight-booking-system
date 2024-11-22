
const Booking = require('../models/Booking');
const Flight = require('../models/Flight');

exports.createBooking = async (req, res) => {
  const { flightId, numberOfSeats } = req.body;
  try {
    const flight = await Flight.findById(flightId);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });

    if (flight.availableSeats < numberOfSeats) {
      return res.status(400).json({ message: 'Not enough seats available' });
    }

    const totalPrice = flight.price * numberOfSeats;
    const booking = new Booking({ userId: req.user.userId, flightId, numberOfSeats, totalPrice });
    await booking.save();

    flight.availableSeats -= numberOfSeats;
    await flight.save();

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.id }).populate('flightId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('flightId').populate('userId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};