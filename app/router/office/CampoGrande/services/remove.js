const OfficeMs = require('../schemas/OfficeMs')

module.exports = async (req, res) => {
  try {
    const officems = await OfficeMs.findOneAndDelete(req.params.id)

    return res.status(202).json('ok')
  } catch (error) {
    return res.status(500).json(error)
  }
}
