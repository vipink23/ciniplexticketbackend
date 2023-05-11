const express = require('express')
const router = express.Router()
const Booking = require('../models/booking')

router.get('/', async (req,res) =>{
    try{
        const booking = await Booking.find()
        res.json(booking)
    }catch(err){
        res.send('Error ' +err)
    }
})

router.get('/:id', async(req,res) =>{
    try{
        const booking = await Booking.findById(req.params.id)
        res.json(booking)
    }catch(err){
        res.send('Error '+err)
    }
})

router.post('/', async (req,res) =>{
    const booking = new Booking({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        selectedSeat: req.body.selectedSeat

    })
    try{
        const a1= await booking.save()
        res.json(a1)
        console.log(a1);
    }catch(err){
        res.send('Error' + err)
    }

})

router.patch('/:id', async(req,res) =>{
    try{
        const booking = await Booking.findById(req.params.id)
        booking.sub = req.body.sub
        const a1 = await booking.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})


module.exports = router
