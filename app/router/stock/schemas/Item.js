const mongoose = require('../../../../database/connection')
const mongoosePaginate = require('mongoose-paginate');
const moment = require('moment')

const Item = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  add: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    required: true
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  history: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemHistory'
  }],
  lastUser: {
    type: String,
    default: 'Pilha Nova',
    required: true
  },
  date: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

Item.plugin(mongoosePaginate)

module.exports = mongoose.model('Item', Item)
