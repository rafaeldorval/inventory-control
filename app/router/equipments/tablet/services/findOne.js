const Tablet = require('../schemas/tablet')

module.exports = async (req, res) => {
  try {
    const tablet = await Tablet.findById(req.params.id).populate('modifierBy')
    return res.status(201).json(tablet)
  } catch (error) {
    return res.status(500).json(error)
  }
}
