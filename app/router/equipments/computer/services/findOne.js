const Computer = require('../schemas/computer')

module.exports = async (req, res) => {
  try {
    const computer = await Computer.findById(req.params.id).populate('modifierBy')
    if (!computer) {
      return res.status(404).json({ msg: 'Equipaments not found' })
    }

    return res.status(201).send({ computer })
  } catch (error) {
    return res.status(500).send(error)
  }
}
