const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.json({
        mesg:'hi'
    })
})

app.listen(3000)
