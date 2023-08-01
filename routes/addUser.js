const express = require("express");
const router = express.Router();
const User = require("../models/customerSchema");
const userController = require("../controllers/userController");
var moment = require("moment");

router.get("", userController.user_add_get);
// POST Requst
router.post("", userController.user_post);

module.exports = router;
