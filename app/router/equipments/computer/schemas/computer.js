const mongoose = require('../../../../../database/connection')
const moment = require('moment')
const mongoosePaginate = require('mongoose-paginate');

const Computer = mongoose.Schema({
  service_tag: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
    enum: ['NOVO', 'USADO'],
    default: 'USADO'
  },
  user: {
    type: String,
    required: true,
    default: 'Não Atribuido'
  },
  purchase_data: 
  {
    distributor: { type: String, required: true },
    sector: { type: String, required: true },
    nfe: { type: String, required: true },
    so: { type: String, required: true },
    date: { type: String, required: true }
  },
  hardware_config: 
  {
    hd: { type: String },
    memory: { type: String },
    processor: { type: String },
    screen: { type: String },
    battery: { type: String },
    warranty: { type: String }

  },
  software_update:[{
    note: { type: String },
    date: { type: String }
  }],
  hardware_update: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'HardwareUpdate'
  },
  modifierBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  delivery_record: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ComputerHistory'
  }],
  status: {
    type: String,
    enum: ['EM USO', 'EM ESTOQUE', 'SUCATA', 'BAIXADO'],
    default: 'EM ESTOQUE',
    required: true
  },
  note: {
    type: String
  },
  date: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

Computer.plugin(mongoosePaginate)

module.exports = mongoose.model('Computer', Computer)
