const express = require('express')
const authMiddleware = require('../../middlewares/auth')

const router = express.Router()

const ms = require('./CampoGrande/index')
const mt = require('./Cuiaba/index');

router.use(authMiddleware)

router.use('/ms', ms)
router.use('/mt', mt)

module.exports = router