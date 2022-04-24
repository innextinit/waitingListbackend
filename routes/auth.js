const router = require("express").Router();
const {
  validateRequestBody,
  localSignUp,
  localLogin,
} = require("../controllers/auth.controller")
const validateBody = require("../utils/bodyValidator")

router.post(
  "/signup",
  validateRequestBody("signup"),
  validateBody,
  localSignUp
);

router.post(
  "/login",
  validateRequestBody("login"),
  validateBody,
  localLogin
);

module.exports = router;