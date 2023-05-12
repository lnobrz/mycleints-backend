const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");

router.get("/", authController.requestToken);

router.get("/get-token", authController.getToken);

router.get("/refresh-token", authController.refreshToken);

module.exports = router;
