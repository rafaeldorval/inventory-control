const Phone = require('../schemas/phone')
const PhoneHistory = require('../schemas/phoneHistory')

module.exports = async (req, res) => {
  try {
    const modifierBy = req.userId

    // const history = await Phone.findById(req.params.id)

    // const phoneHistory = await PhoneHistory.create({
    //     model: history.model,
    //     service_tag: history.service_tag,
    //     equipament_status: history.equipament_status,
    //     delivery_note: history.delivery_note,
    //     chip: history.chip,
    //     serial_chip: history.serial_chip,
    //     status: history.status,
    //     first_imei: history.first_imei,
    //     second_imei: history.second_imei,
    //     modifierBy: history.modifierBy,
    //     lastUser: history.lastUser,
    //     note: history.note
    // });

    const phone = await Phone.findByIdAndUpdate(req.params.id, { ...req.body, modifierBy: modifierBy }, { new: true })

    return res.status(202).send({ phone })
  } catch (error) {
    return res.status(500).send({ error })
  }
}
