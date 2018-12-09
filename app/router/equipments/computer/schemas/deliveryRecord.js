const mongoose = require('../../../../../database/connection')
const moment = require('moment')

const DeliveryRecord = mongoose.Schema({
 user: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['NOVO', 'USADO'],
    default: 'NOVO',
    required: true
  },
  interface_volvo: {
    type: Boolean,
    default: false,
    required: true
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

module.exports = mongoose.model('DeliveryRecord', DeliveryRecord)
