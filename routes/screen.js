const express = require('express')
const router = express.Router()
const Screen = require('../models/screen')

router.get("/", async (req, res) => {
    try {
        const screen = await Screen.find()
        res.json(screen)
    } catch (err) {
        res.send('Error' + err)
    }
})
router.post("/", async (req, res) => {
    const screen = new Screen({
        screen: req.body.screen,
    })
    try {
     const a3 = await screen.save()
     res.json(a3)

    }catch(err){
     res.send('Error'+err)
    }
	
})

module.exports = router