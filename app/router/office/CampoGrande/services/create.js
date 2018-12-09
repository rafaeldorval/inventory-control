const OfficeMs = require('../schemas/OfficeMs')

module.exports = async (req, res) => {
  try {
    const officems = await OfficeMs.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).json({ officems })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
