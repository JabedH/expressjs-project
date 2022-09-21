const { Router } = require("express");
const express = require("express");
const toolsControllers = require("../../usersControl/usersControl");

const router = express.Router();

router.route("/:id").get(toolsControllers.getAllUsers);
module.exports = router;
