const express = require('express')
const authMiddleware = require('../../middlewares/auth')
const adminRole = require('../../middlewares/roleAdminCheck')
const userRole = require('../../middlewares/roleUserCheck')

const phone = require('./phone/index')
const computer = require('./computer/index')
const tablet = require('./tablet/index')

const router = express.Router()

router.use(authMiddleware)

router.use('/phone', phone)
router.use('/computer', computer)
router.use('/tablet', tablet)

module.exports = router
