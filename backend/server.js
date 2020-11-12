const express = require('express');
const dotenv = require('dotenv')
const app = express();

dotenv.config()

app.get('/', (req, res) => {
    res.json( {msg: "Hello Nicholas"})
})

app.listen(process.env.PORT , () => {
    console.log(`App running on PORT ${process.env.PORT}`)
} )