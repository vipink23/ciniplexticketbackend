const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const url='mongodb+srv://vipink:vipin23@cluster0.ttc6pi6.mongodb.net/Data'
const url='mongodb://0.0.0.0:27017/cineplex'
// const url='mongodb+srv://vipink:vipin23@cluster0.ttc6pi6.mongodb.net/Data'           
const app = express()
app.use(cors())
mongoose.set('strictQuery', true)
mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection
// console.log(con)

con.on('open',()=>{
    console.log('connected....')
})

app.use(express.json())

const bookingRouter= require('./routes/booking')
app.use('/booking',bookingRouter)

const movieRouter = require ('./routes/movie.js')
app.use('/movies',movieRouter)

const screenRouter = require('./routes/screen')
app.use("/screen",screenRouter)
 
const screeningRouter = require('./routes/screening')
app.use('/screening',screeningRouter)


app.listen(9000, ()=>{
    console.log('server started')
})