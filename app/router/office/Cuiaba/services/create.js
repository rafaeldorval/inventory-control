const OfficeMt = require('../schemas/OfficeMt')

module.exports = async (req, res) => {
  try {
    const officemt = await OfficeMt.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).json({ officemt })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
