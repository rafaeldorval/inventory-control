const mongoose = require('../../../../../database/connection')
const moment = require('moment');

const Tablet = new mongoose.Schema({
  service_tag: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  equipament_status: {
    type: String,
    enum: ['NOVO', 'USADO'],
    required: true
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['EM USO', 'EM ESTOQUE', 'SUCATA', 'BAIXADO'],
    default: 'EM USO',
    required: true
  },
  note: {
    type: String,
    required: true
  },
  createBy: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

module.exports = mongoose.model('Tablet', Tablet)
