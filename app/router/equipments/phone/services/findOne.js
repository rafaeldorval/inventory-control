const Phone = require('../schemas/phone')

module.exports = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id).populate('modifierBy')
    console.log(phone.modifierBy.name)
    return res.status(201).send(phone)
  } catch (error) {
    return res.status(500).send(error)
  }
}
