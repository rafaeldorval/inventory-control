const ComputerHistory = require('../schemas/computerHistory')

module.exports = async (req, res) => {
  try {
    const history = await ComputerHistory.find({ computer: req.params.id })
                                         .populate('modifierBy')

    return res.status(201).send({ history })                                         

  } catch (error) {
    return res.status(500).send({ error })
  }
}