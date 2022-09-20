const express = require('express');
const router  = express.Router();
const FlightController = require('../controllers/flightcontroller');
const Flight = require('../models/flight')
router.post('/flights', FlightController.postflight);
router.put('/flights/:id', FlightController.updateflight);
router.delete('/flights/:id', FlightController.deleteflight);
router.get('/flights/:FlightId',FlightController.getbyflightnum)
router.get('/flights/:FlightDateTime',FlightController.getbyflightdate)
router.get( '/flights?source=`source`&dest=`dest',FlightController.getbysource_dest)

router.get('/flights/', function(req, res) {

  const source = req.query;
  const dest = req.dest;
})


module.exports = router;
