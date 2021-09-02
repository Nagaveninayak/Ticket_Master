const mongoose = require('mongoose')

const setUpdb = ()=>{
    mongoose.connect('mongodb://localhost:27017/ticketapp')
        .then(()=>{
            console.log('connected to db')
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = setUpdb