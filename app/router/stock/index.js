const express = require('express')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

const list = require('./services/list')
const create = require('./services/create')
const findOne = require('./services/findOne')
const remove = require('./services/remove')
const update = require('./services/update')
const history = require('./services/history');

router.use(authMiddleware)

router.get('/', list)
router.post('/', create)
router.get('/history/:id', history)
router.delete('/:id', remove)
router.get('/:id', findOne)
router.put('/:id', update)

module.exports = router
