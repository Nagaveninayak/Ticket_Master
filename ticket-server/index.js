const express = require('express')
const cors = require('cors')
const setUpdb = require('./config/dbSetup')
const {router} = require('./config/router')

const app = express()
const port = 3300

setUpdb()

app.use(express.json())
app.use(cors())
app.use('/',router)


app.listen(port, ()=>{
    console.log('listening at port', port)
})