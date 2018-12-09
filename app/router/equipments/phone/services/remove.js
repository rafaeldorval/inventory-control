const Phone = require('../schemas/phone')

module.exports = async (req, res) => {
  try {
    const phone = await Phone.findOneAndDelete(req.params.id)

    return res.status(202).send('ok')
  } catch (error) {
    return res.status(500).send(error)
  }
}
