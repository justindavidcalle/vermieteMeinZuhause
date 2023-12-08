const express = require('express')
const router = express.Router()
const User = require('../models/userModel')

router.get('/', async (req, res) =>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


module.exports = router