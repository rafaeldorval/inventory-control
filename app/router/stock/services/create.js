const Item = require('./../schemas/Item')

module.exports = async (req, res) => {
  try {
    const item = await Item.create({ ...req.body, modifierBy: req.userId })

    return res.status(201).json({ status: true, data: { item } })
  } catch (err) {
    return res.status(500).json({ status: false, data: { err } })
  }
}
