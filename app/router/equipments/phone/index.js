const express = require('express')
const router = express.Router()
const authMiddleware = require('../../../middlewares/auth')

const list = require('./services/list')
const create = require('./services/create')
const update = require('./services/update')
const findOne = require('./services/findOne')
const remove = require('./services/remove')

router.use(authMiddleware)

router.get('/', list)
router.post('/', create)
router.put('/:id', update)
router.get('/:id', findOne)
router.delete('/:id', remove)

module.exports = router
