const Tablet = require('../schemas/tablet')

module.exports = async (req, res) => {
  try {
    const modifierBy = req.userId

    const tablet = await Tablet.findByIdAndUpdate(req.params.id, { ...req.body, modifierBy: modifierBy }, { new: true })

    return res.status(202).send({ tablet })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
