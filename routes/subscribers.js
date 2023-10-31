const express = require('express')
const router = express.Router()
const Subscriber = require('../models/susbcriber')
const subscribers = require('../models/subscribers')

// Getting all
router.get('/', async(req, res) => { 
    try {
        const subscriber = await Subscriber.find()
        res.json(subscribers)
    } catch (error) { 
        res.status(500).json({message: error.message})
    }
})

// Getting One
router.get('/:id', getSubscriber, (req,res) => {
    res.json(res.subscriber)
})

// Creating one
router.post('/', async (req,res) => {
    const subscriber = new Subscriber
    name: req.body.name,
    subscribedToChannel; req.body.subscribedToChannel
})

try {
    const newSubscriber = await subscribersave()
    res.status(201).json(newSubscriber)
} catch (err) {
    res.status(400).json({message: err.message })
}

// Updating One
router.patch('/',  getSubscriber, async (req,res) => {
    if (req.body.name != null) {
        res.subscriber.name = req.body.name
    }
    try {
        const updatedSubsriber = await res.subscriber.save()
        res.json(updatedSubscriber)

    } catch (err) {
        res.status(400).json({message err.message})
    }
})

// Deleting One
router.delete('/:id', getSubscriber, async(req,res) => {
    try { 
        await res.subscriber.remove()

    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

function getSubscriber (req,res,next) {
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({message: 'Cannot find subscriber'})
        }

    } catch(err) {
        return res.status(500).json({message: err.message })

    }

    res.Subscriber = subscriber
}

module.exports = router