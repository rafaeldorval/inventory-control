const User = require('./../schemas/user')

module.exports = (req, res) => {
  try {
    return res.status(200).json({
      user: req.user
    })
  } catch (error) {
    return res.status(500).json({ error: error })
  }
}
