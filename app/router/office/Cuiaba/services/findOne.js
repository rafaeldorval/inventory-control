const OfficeMt = require('../schemas/OfficeMt')

module.exports = async (req, res) => {
  try {
    const officemt = await OfficeMt.findById(req.params.id).populate('modifierBy')
    if (!officemt) {
      return res.status(404).json({ msg: 'Equipaments not found' })
    }

    return res.status(201).send({ officemt })
  } catch (error) {
    return res.status(500).send(error)
  }
}
