console.log('Server not started')
const express = require('express')
const app = express()
app.get('/',(req,res) => res.send("Sharuk"))
app.listen('8000' , err => {
    if(err) console.log(err)
    console.log('Server is started at PORT number : 8000')
})
