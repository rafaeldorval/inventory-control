const OfficeMt = require('../schemas/OfficeMt')

module.exports = async (req, res) => {
  try {
    const officemt = await OfficeMt.find({}).sort({ status: -1 }).populate('modifierBy')

    return res.status(200).send({ officemt })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
