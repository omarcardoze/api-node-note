const mongoose = require('mongoose')
require('dotenv').config()

const {MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV} = process.env

const connectionString = NODE_ENV === 'test'
      ? MONGO_DB_URI_TEST
      : MONGO_DB_URI

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => {
        console.log("Database connected!");
  }).catch(err => {
        console.log(err);
  })

  process.on('uncaughtException', () => {
    mongoose.connection.disconnect()
  })
