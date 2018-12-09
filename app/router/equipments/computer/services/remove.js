const Computer = require('../schemas/computer')

module.exports = async (req, res) => {
  try {
    const computer = await Computer.findOneAndDelete(req.params.id)

    return res.status(202).json('ok')
  } catch (error) {
    return res.status(500).json(error)
  }
}
