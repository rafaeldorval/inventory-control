const mongoose = require('../../../../database/connection')
const bcrypt = require('bcryptjs')
const moment = require('moment');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    select: false
  },
  role: {
    type: String,
    required: true
  },
  createAt: {
    type: String,
    default: () => moment().format("DD/MM/YY, h:mm:ss a")
  }
})

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
