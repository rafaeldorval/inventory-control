const mongoose = require('../../../../../database/connection')
const moment = require('moment');

const Phone = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  service_tag: {
    type: String,
    required: true
  },
  equipament_status: {
    type: String,
    enum: ['NOVO', 'USADO'],
    default: 'NOVO',
    required: true
  },
  delivery_note: {
    type: String
  },
  chip: {
    type: String,
    required: true
  },
  serial_chip: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['EM USO', 'EM ESTOQUE', 'SUCATA', 'BAIXADO'],
    default: 'EM USO'
  },
  first_imei: {
    type: String,
    required: true
  },
  second_imei: {
    type: String,
    required: true
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  lastUser: {
    type: String,
    required: true
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

module.exports = mongoose.model('Phone', Phone)
