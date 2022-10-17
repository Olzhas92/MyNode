const path = require("path");

const express = require("express");

const routeDir = require("../util/path");

const router = express.Router();

router.get("/", (request, response, next) => {
  response.sendFile(path.join(routeDir, "views", "shop.html"));
});

module.exports = router;
