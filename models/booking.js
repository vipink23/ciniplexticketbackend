const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    selectedSeat: [{
        type: Number,
        required: true,
    }]
})
module.exports = mongoose.model('booking', bookingSchema)