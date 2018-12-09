const Phone = require('../schemas/phone')

module.exports = async (req, res) => {
  try {
    const phone = await Phone.find({}).sort({ status: -1 }).populate('modifierBy')

    return res.status(200).send({ phone })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
