const Item = require('./../schemas/Item')
const ItemHistory = require('./../schemas/ItemHistory')

module.exports = async (req, res) => {
  try {
    const { title, amount, lastUser, add, sector, equipment } = req.body
    const modifierBy = req.userId

    const old = await Item.findById(req.params.id)

    const itemHistory = await ItemHistory.create({
      user: lastUser,
      modifierBy,
      sector,
      equipment,
      amount,
      item: req.params.id
    })
    let amountUser = old.amount + amount

    if (!add) {
      amountUser = old.amount - amount
    }

    const item = await Item.findByIdAndUpdate(req.params.id, {
      title,
      amount: amountUser,
      lastUser,
      modifierBy
    }, { new: true })

    await item.history.push(itemHistory)

    await item.save()

    return res.status(200).send({ item })
  } catch (err) {
    console.log(err)
    return res.status(500).send({ err })
  }
}
