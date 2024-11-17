const Flight = require('../models/Flight');

const getFlights = async (req, res) => {
    try {
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

module.exports = { getFlights, searchFlights };
