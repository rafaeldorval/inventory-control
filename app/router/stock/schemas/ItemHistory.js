const mongoose = require('../../../../database/connection')
const mongoosePaginate = require('mongoose-paginate');
const moment = require('moment')

const ItemHistory = new mongoose.Schema({
  amount: {
    type: Number
  },
  equipment: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  user: {
    type: String
  },
  date: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

ItemHistory.plugin(mongoosePaginate)

module.exports = mongoose.model('ItemHistory', ItemHistory)
