
const express = require('express');
const router = express.Router();
const { authenticate, adminOnly } = require('../middlewares/auth');
const {
  getFlights,
  searchFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require('../controllers/flightController');

router.get('/', getFlights);
router.get('/search', searchFlights);
router.get('/:id',(req, res) =>  getFlightById(req, res));
router.post('/', (req, res)=> addFlight(req, res));
router.put('/:id', (req, res) => updateFlight(req, res));
router.delete('/:id', (req, res) => deleteFlight(req, res));

module.exports = router;