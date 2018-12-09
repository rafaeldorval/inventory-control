const Phone = require('../schemas/phone')

module.exports = async (req, res) => {
  try {
    const phone = await Phone.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).send({ phone })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
