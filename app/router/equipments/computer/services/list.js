const Computer = require('../schemas/computer')

module.exports = async (req, res) => {
  try {
    // const computer = await Computer.find({}).sort({ status: -1 })
    //                                         .populate('modifierBy')
    //                                         .populate('history')
    const {page, perPage, search} = req.query
    const query = search || {}
    const options = {
      sort: { date: -1 },
      populate: ['modifierBy'],
      limit: parseInt(perPage, 10) || 5,
      page: parseInt(page, 10) || 1
    }
    const computer = await Computer.paginate(query, options)

    return res.status(200).send({ computer })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
