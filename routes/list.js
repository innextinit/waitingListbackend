const router = require("express").Router();
const {
  listValidationRules,
  getAllListMember,
  addToWaitingList,
} = require("../controllers/list.controller");
const bodyValidator = require("../utils//bodyValidator");
const { auth } = require("../auth/auth");

router.get(
  "/",
  auth,
  getAllListMember,
)

router.post(
  "/",
  listValidationRules("add"),
  bodyValidator,
  addToWaitingList
)

module.exports = router;