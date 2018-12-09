const Tablet = require('../schemas/tablet')

module.exports = async (req, res) => {
  try {
    const tablet = await Tablet.find({}).sort({ status: -1 }).populate('modifierBy')

    return res.status(200).send({ tablet })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
