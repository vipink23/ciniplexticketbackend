const mongoose =require('mongoose')

const movieSchema = new mongoose.Schema({

    image:{
        type:String,
        required:true
     },
     movie:{
        type:String,
        required:true
     },
     director:{
        type:String,
        required:true
     },
     summary:{
         type:String,
         required:true
     },
    about:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
  
})
module.exports = mongoose.model('movie',movieSchema)