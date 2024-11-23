const Flight = require('../models/Flight');

const getFlights = async (req, res) => {
    try {
        console.log('trying to get all the users');
        const flights = await Flight.find();
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const searchFlights = async (req, res) => {
    try {
        const { origin, destination, date } = req.query;
        const flights = await Flight.find({ origin, destination, date });
        res.json(flights);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addFlight = async (req, res) => {
    const uuid = crypto.randomUUID();
    const { flightNumber, airline, origin, destination, date, time, price, availableSeats } = req.body;

    console.log('Request body:', req.body);
  debugger;

    try {
        const flight = new Flight({ id:uuid, flightNumber, airline, origin, destination, date, time, price, availableSeats });
        await flight.save();

        res.status(201).json({ message: 'Flight added successfully', flight });
    } catch (err) {
        console.error('Error in addFlight:', err);
        res.status(400).json({ error: err.message });
    }
};


const updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json({ message: 'Flight deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFlights, searchFlights, addFlight, getFlightById, updateFlight , deleteFlight };
