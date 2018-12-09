const Tablet = require('../schemas/tablet')

module.exports = async (req, res) => {
  try {
    const tablet = await Tablet.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).send({ tablet })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
