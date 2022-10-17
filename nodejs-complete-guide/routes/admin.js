const path = require("path");

const express = require("express");

const routeDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (request, response, next) => {
  console.log("In another middleware");
  console.log(request);
  response.sendFile(path.join(routeDir, "views", "add-product.html"));
});

router.post("/add-product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
