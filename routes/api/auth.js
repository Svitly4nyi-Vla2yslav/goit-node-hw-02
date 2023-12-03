const express = require("express");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");
 
const ctrl = require("../../controllers/contacts")

const router = express.Router();

router.post("/users/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch("/users", authenticate, validateBody(schemas.updateSubscriptionSchema), ctrl.updateSubscription)

module.exports = router;
