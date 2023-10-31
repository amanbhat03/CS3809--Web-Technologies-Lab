const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    subscriberToChannel: {

    },

    subssribeDate: {
        type:  Date, 
        required: true,
        defualt: Date.now 
    }
})

module.exports = mongoose.model('Subscribe', subscriberSchema)