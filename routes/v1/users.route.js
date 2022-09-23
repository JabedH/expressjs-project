const { Router } = require("express");
const express = require("express");
const toolsControllers = require("../../usersControl/usersControl");

const router = express.Router();

router.route("/random").get(toolsControllers.getRandomUser);
router.route("/all").get(toolsControllers.getAllUser);
router.route("/save").post(toolsControllers.saveNewUser);
router.route("/update").patch(toolsControllers.updateUser);
router.route("/bulk-update").patch(toolsControllers.bulkUpdate);
router.route("/delete/:id").delete(toolsControllers.deleteUser);
module.exports = router;
