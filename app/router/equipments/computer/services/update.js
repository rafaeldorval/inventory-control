const Computer = require('../schemas/computer')
const ComputerHistory = require('../schemas/computerHistory')

module.exports = async (req, res) => {
  try {
    const modifierBy = req.userId

    const history =  await ComputerHistory.create({
      current_user: req.body.user,
      note: req.body.note,
      computer: req.params.id,
      modifierBy
    })

    const computer = await Computer.findByIdAndUpdate(req.params.id, { ...req.body, modifierBy: modifierBy }, { new: true })

    await computer.history.push(history)

    await computer.save()

    return res.status(202).json({ computer })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}
