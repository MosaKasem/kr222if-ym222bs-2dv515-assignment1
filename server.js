const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const csv = require('csv-parser')
require('events').EventEmitter.prototype._maxListeners = 100
const app = express()

const PORT = process.env.PORT || 5000

app.use(bodyParser.json())

app.use('/pearson', require('./routes/pearson'))
app.use('/euclidean', require('./routes/euclidean'))

app.get('/', (req, res) => {
  res.send('home')
  parseCVStoJSON('ratings')
  parseCVStoJSON('users')
})

app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })

const parseCVStoJSON = (filename) => {
  console.log('filename: ', filename);
  const results = []
  fs.createReadStream(filename + '.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const json = JSON.stringify(results)

      fs.writeFile(filename + '.json', json, 'utf8', (err) => {
        if (err) console.log(err)

        console.log('ok writing to file')
      })
    })
}
