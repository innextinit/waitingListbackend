const router = require("express").Router();
const {
  userValidationRules,
  getAllUser,
  deleteUser,
} = require("../controllers/user.controller");
const bodyValidator = require("../utils//bodyValidator");
const { auth } = require("../auth/auth");

router.get(
  "/",
  auth,
  getAllUser,
)

router.delete(
  "/",
  auth,
  userValidationRules("delete"),
  bodyValidator,
  deleteUser
)

module.exports = router;