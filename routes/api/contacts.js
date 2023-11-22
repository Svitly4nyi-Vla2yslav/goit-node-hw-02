const express = require('express')

const ctrl = require("../../controllers/contacts")

const router = express.Router()

const {validateBody} = require("../../middlewares")

const {schemas }= require("../../models/contact")

router.get('/', ctrl.getAll)

// router.get('/:contactId', ctrl.getById)

router.post('/', validateBody(schemas.addSchema), ctrl.add)

// router.delete('/:contactId', ctrl.remove)

// router.put('/:contactId', validateBody(schema.addSchema), ctrl.update)

module.exports = router
