const Computer = require('../schemas/computer')

module.exports = async (req, res) => {
  try {
    const computer = await Computer.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).json({ computer })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
