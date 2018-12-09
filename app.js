require('dotenv').load()
const express = require('express')
const mongoose = require('./database/connection')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const port = process.env.PORT || 3000

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

require('./app/index')(app)

app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
