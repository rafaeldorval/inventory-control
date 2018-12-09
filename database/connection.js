const mongoose = require('mongoose')

const HOST = process.env.DB_HOST
const PORT = process.env.DB_PORT
const DB = process.env.DB_PORT

const url = `mongodb://${HOST}:${PORT}/${DB}`

mongoose.Promise = global.Promise
mongoose.connect(url, { useCreateIndex: true, useNewUrlParser: true })
mongoose.connection

module.exports = mongoose
