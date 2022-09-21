const { Router } = require("express");
const express = require("express");
const toolsControllers = require("../../usersControl/usersControl");

const router = express.Router();

router.route("/random").get(toolsControllers.getRandomUser);
router.route("/all").get(toolsControllers.getAllUser);
router.route("/save").post(toolsControllers.saveNewUser);
module.exports = router;
