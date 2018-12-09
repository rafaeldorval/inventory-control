const Item = require('./../schemas/Item')

module.exports = async (req, res) => {
  try {
    const item = await Item.findById({ _id: req.params.id }).populate('modifierBy')

    return res.status(200).send({ item })
  } catch (err) {
    return res.status(404).send({ error: 'Item not found' })
  }
}
