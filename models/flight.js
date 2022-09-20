const mongoose = require('mongoose')
const { 
    v1: uuidv1,
    v4: uuidv4,
  } = require('uuid');
  
const flightSchema = new mongoose.Schema({

    FlightSource: {
        type: String,
        required: true
    },
    FlightDestination: {
        type: String,
        required: true
    },
    
    FlightId: {
        type: Number,
        required: true,
        // default: () => uuidv1(),
        // index: { unique: true },
    },
    
    FlightDateTime:{
        type: Date, 
        required: true, 
        default: Date.now
    }
    

})

module.exports = mongoose.model('flight',flightSchema)