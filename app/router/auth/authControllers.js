const express = require('express')
const router = express.Router()
const authMiddleware = require('../../middlewares/auth')

const create = require('./services/create')
const authenticate = require('./services/authenticate')
const me = require('./services/me')

router.post('/create', create)
router.post('/authenticate', authenticate)
router.get('/me', authMiddleware, me)

module.exports = router
