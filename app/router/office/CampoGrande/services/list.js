const OfficeMs = require('../schemas/OfficeMs')

module.exports = async (req, res) => {
  try {
    const officems = await OfficeMs.find({}).sort({ status: -1 }).populate('modifierBy')

    return res.status(200).send({ officems })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
