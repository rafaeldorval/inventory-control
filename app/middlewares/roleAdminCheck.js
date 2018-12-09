const User = require('../router/auth/schemas/user')

module.exports = async (req, res, next) => {
  if (!req.userId) {
    return res.status(403).end()
  }

  const user = await User.findById(req.userId)

  if (!user) {
    return res.status(403).end()
  }

  const { role } = user

  if (role === 'admin') {
    return next()
  } else {
    return res.status(403).send({ err: 'Not Autorized' })
  }
}
