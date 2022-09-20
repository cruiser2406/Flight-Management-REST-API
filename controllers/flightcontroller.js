//GET '/tea'
const Claim = require('../models/flight')

//add new flight '/flights'
const postflight =async(req,res) => {
    const alien = new Claim({
        FlightSource: req.body.FlightSource,
        FlightDestination: req.body.FlightDestination,
        FlightId: req.body.FlightId,
        FlightDateTime:req.body.FlightDateTime
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }catch(err){
        res.send(err)
    }
}
//update flight
const updateflight =async(req,res)=> {
    try{
        const alien = await Claim.findById(req.params.id) 
        //const alien = await Claim.find({FlightId : req.params.id})
        alien.FlightSource = req.body.FlightSource,
        alien.FlightDestination = req.body.FlightDestination,
        alien.FlightId = req.body.FlightId,
        alien.FlightDateTime = req.body.FlightDateTime

      
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
        console.log(err)
    }

}

const deleteflight = async(req,res)=> {
    try{
        const alien = await Claim.findByIdAndDelete(req.params.id)
        
        const a1 = await alien.save()
        res.json(a1)   
    }catch(err){
        res.send(err)
    }

}
const getbyflightnum = async(req,res)=> {
    try{
        
        const alien = await Claim.find({FlightId : req.params.FlightId})
        //const alien2 = await Claim.find({date : req.params.date})
        
        res.json(alien)
        //res.send('hi')
    }catch(err){
        res.send(err)
    }

}
const getbyflightdate = async(req,res)=> {
    try{
        
        const alien = await Claim.find({FlightDateTime : req.params.FlightDateTime})
        //const alien2 = await Claim.find({date : req.params.date})
        
        res.json(alien)
        //res.send('hi')
    }catch(err){
        res.send(err)
    }

}

const getbysource_dest =async(req,res) => {
    try{
        var query = require('url').parse(req.url,true).query;
        var source = query.source;
        var dest = query.dest
           const alien = await Claim.find({FlightSource : source})
           const alien2 = await Claim.find({FlightDestination : dest})

           res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
}




//export controller functions
module.exports = {
   
    getbysource_dest,
    postflight,
    updateflight,
    deleteflight,
    getbyflightnum,
    getbyflightdate
    
};
