const Item = require('./../schemas/Item')

module.exports = async (req, res) => {
  try {
    const item = await Item.findByIdAndRemove(req.params.id)

    return res.status(200).send({ Alert: 'Remove Success' })
  } catch (err) {
    return res.status(500).send({ err })
  }
}
