const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middelware/checkAuth");
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard", isLoggedIn, dashboardController.dashboard);

module.exports = router;
