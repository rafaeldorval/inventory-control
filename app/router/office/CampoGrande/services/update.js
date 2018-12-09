const OfficeMs = require('../schemas/OfficeMs')

module.exports = async (req, res) => {
  try {
    const modifierBy = req.userId

    const officems = await OfficeMs.findByIdAndUpdate(req.params.id, { ...req.body, modifierBy: modifierBy }, { new: true })

    return res.status(202).json({ officems })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
