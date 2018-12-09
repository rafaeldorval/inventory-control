const User = require('./../schemas/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../../../../config/auth')

module.exports = async (req, res) => {
  const { userName, password } = req.body

  const user = await User.findOne({ userName }).select('+password')

  if (!user) {
    return res.status(400).json({ status: false, error: 'User not found' })
  }

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).json({ status: false, error: 'Passowrd invalid' })
  }

  user.password = undefined

  const token = jwt.sign({ id: user.id }, authConfig.secret, {
    expiresIn: 3600
  })

  res.send({ user, token })
}
