const mongoose = require('../../../../../database/connection')
const moment = require('moment');

const OfficeMs = mongoose.Schema({
  key: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  nfe: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['EM USO', 'EM ESTOQUE', 'BLOQUEADA'],
    default: 'EM USO',
    required: true
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  note: {
    type: String,
    default: 'Não há observações'
  },
  date: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

module.exports = mongoose.model('OfficeMs', OfficeMs)