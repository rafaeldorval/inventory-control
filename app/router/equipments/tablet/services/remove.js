const Tablet = require('../schemas/tablet')

module.exports = async (req, res) => {
  try {
    const tablet = await Tablet.findOneAndDelete(req.params.id)

    return res.status(202).send('ok')
  } catch (error) {
    return res.status(500).send(error)
  }
}
