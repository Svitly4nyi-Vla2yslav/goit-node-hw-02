const express = require('express')

const ctrl = require("../../controllers/contacts")

const router = express.Router()

const { validateBody, isValidId } = require("../../middlewares")

const { schemas } = require("../../models/contact")

router.get('/', ctrl.getAll)

router.get('/:id', isValidId, ctrl.getById)

router.post('/', validateBody(schemas.addSchema), ctrl.add)

router.delete('/:id', isValidId, ctrl.remove)

router.put('/:id', isValidId, validateBody(schemas.addSchema), ctrl.update)

router.patch('/:id/favorite', isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite)

module.exports = router;
