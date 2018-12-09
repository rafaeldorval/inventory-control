const OfficeMs = require('../schemas/OfficeMs')

module.exports = async (req, res) => {
  try {
    const officems = await OfficeMs.findById(req.params.id).populate('modifierBy')
    if (!officems) {
      return res.status(404).json({ msg: 'Equipaments not found' })
    }

    return res.status(201).send({ officems })
  } catch (error) {
    return res.status(500).send(error)
  }
}
