const mongoose = require('../../../../../database/connection')
const moment = require('moment')

const ComputerHistory = mongoose.Schema({
  current_user: {
    type: String,
    required: true
  },
  hardware_descript: {
    type: String,
    required: true
  },
  computer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Computer'
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  note: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

module.exports = mongoose.model('ComputerHistory', ComputerHistory)
