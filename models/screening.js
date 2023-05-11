const mongoose =  require ('mongoose')

const  screeningSchema = new mongoose.Schema({
    movie:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"movie"
    },
    screen:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'screen'
        
    },
    time:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model("screening", screeningSchema)