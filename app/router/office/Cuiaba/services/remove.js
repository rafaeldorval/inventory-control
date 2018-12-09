const OfficeMt = require('../schemas/OfficeMt')

module.exports = async (req, res) => {
  try {
    const officemt = await OfficeMt.findOneAndDelete(req.params.id)

    return res.status(202).json('ok')
  } catch (error) {
    return res.status(500).json(error)
  }
}
