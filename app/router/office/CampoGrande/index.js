const express = require('express')
const router = express.Router()

const list = require('./services/list')
const create = require('./services/create')
const findOne = require('./services/findOne')
const update = require('./services/update')
const remove = require('./services/remove');

router.get('/', list)
router.post('/', create)
router.get('/:id', findOne)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router