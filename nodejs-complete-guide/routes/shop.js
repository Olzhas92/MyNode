const path = require("path");

const express = require("express");

const routeDir = require("../util/path");

const adminData = require("./admin");

const router = express.Router();

router.get("/", (request, response, next) => {
  // console.log("shop.js", adminData.products);
  // response.sendFile(path.join(routeDir, "views", "shop.html"));

  response.render("shop");
});

module.exports = router;
