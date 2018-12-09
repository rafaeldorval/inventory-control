const mongoose = require('mongoose')

const HardwareUpdate = mongoose.Schema({
  hardware: {
    type: String,
    required: true
  },
  nfe: {
    type: String,
    required: true
  },
  distributor: {
    type: String,
    required: true
  },
  date: {
    type: String
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }

})

module.exports = mongoose.model('HardwareUpdate', HardwareUpdate)