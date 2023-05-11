const express = require ('express')
const router = express.Router()
const Movie = require('../models/movie')

router.get('/', async (req,res) =>{
    try{
        const movies = await Movie.find()
        res.json(movies)

    }catch(err){
        res.send('Error'+ err)
    }
})

router.post('/', async (req,res) =>{
    const movies = new Movie({
        image:req.body.image,
        movie:req.body.movie,
        director:req.body.director,
        summary:req.body.summary,
        about:req.body.about,
        rating:req.body.rating
    })
    try{
        const a2 = await movies.save()
        console.log(a2);
        res.json(a2)

    }catch(err){
        res.send('Error'+err)
    }

})

module.exports = router