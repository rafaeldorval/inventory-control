const mongoose = require('../../../../../database/connection')

const OfficeMt = mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('OfficeMt', OfficeMt)