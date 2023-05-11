const express = require("express")
const router = express.Router()
const Screening = require('../models/screening.js')

router.get("/", async (req, res) => {
	try{
        const screening = await Screening.find()
        res.json(screening)
    }catch(err){
        res.send('Error'+err)
    }
	
})

router.post('/', async (req,res) =>{
    const screening = new Screening({
       movie:req.body.movie,
       screen:req.body.screen,
       time:req.body.time
    })
    try{
        const a4 = await screening.save()
        res.json(a4)
    }catch(err){
        res.send('Error'+ err)
    }

})

module.exports = router