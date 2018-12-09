const Item = require('./../schemas/Item')

module.exports = async (req, res) => {
  try {
    // const item = await Item.find({}).sort({ amount: -1 }).populate('modifierBy').populate('history')
    const {page, perPage, search} = req.query
    const query = search || {}
    const options = {
      sort: { date: -1 },
      populate: ['modifierBy', 'history'],
      limit: parseInt(perPage, 10) || 5,
      page: parseInt(page, 10) || 1
    }
    const item = await Item.paginate(query, options)

    if (item == '') {
      return res.send(404).send('Item not found')
    }

    return res.status(200).json({ item })
  } catch (err) {
    return res.status(500).send({ error: `I have a error: ${err}` })
  }
}
