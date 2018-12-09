const User = require('./../schemas/user')

module.exports = async (req, res) => {
  const { email, userName } = req.body

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ status: false, Error: 'Email already exist' })
    }

    if (await User.findOne({ userName })) {
      return res.status(400).json({ status: false, Error: 'User Name already exist' })
    }

    const user = await User.create(req.body)

    user.password = undefined

    return res.status(201).json({ status: true, data: { user } })
  } catch (err) {
    return res.status(500).json({ staus: false, data: { err } })
  }
}
