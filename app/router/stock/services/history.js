const History =  require('../schemas/ItemHistory');

module.exports = async (req, res) => {
    try {
        // const history = await History.find({item: req.params.id}).populate('modifierBy')
        const {page, perPage, search} = req.query
        const query = search || {}
        const options = {
          sort: { date: 1 },
          populate: ['modifierBy', 'history'],
          limit: parseInt(perPage, 10) || 5,
          page: parseInt(page, 10) || 1
        }
        const history = await History.paginate({ item: req.params.id }, options)

        return res.status(201).json({ history })
    } catch (error) {
        return res.status(500).json({ error })
    }
}