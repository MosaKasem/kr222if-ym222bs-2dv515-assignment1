require('./database/db').run().catch() // run database, catch errors!
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())


app.use('/', require('./routes/users'))
app.use('/', require('./routes/ratings'))
app.use('/', require('./routes/items'))

app.listen(PORT, () => {console.log("Server is running on: " + PORT)})