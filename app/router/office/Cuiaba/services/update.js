const OfficeMt = require('../schemas/OfficeMt')

module.exports = async (req, res) => {
  try {
    const modifierBy = req.userId

    const officemt = await OfficeMt.findByIdAndUpdate(req.params.id, { ...req.body, modifierBy: modifierBy }, { new: true })

    return res.status(202).json({ officemt })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
