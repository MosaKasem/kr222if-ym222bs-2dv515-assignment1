
let mongoose = require('mongoose')

require('dotenv').config()

const connection = process.env.DATA_STRING

/* module.exports.run = async () => {
  try {
    mongoose.Promise = global.Promise
    mongoose.connection.on('connected', () => console.log('Connected To DB'))
    mongoose.connection.on('error', err => console.error(`Connection Failed: ${err}`))
    mongoose.connection.on('disconnected', () => console.log('Disconnected From DB.'))
//   mongoose.set('runValidators', true)
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination.')
        process.exit(0)
      })
    })
  } catch (error) {
    console.log('error: ', error)
  }

  // Connect to the server.
  return mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  // , {auth: {authdb: 'admin'}}
} */

module.exports.run = async () => {
    try {
        await mongoose.connect(connection, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Connected To mongoDB')
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}
