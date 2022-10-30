const path = require("path");

const express = require("express");

const routeDir = require("../util/path");

const router = express.Router();

const products = [];

router.get("/add-product", (request, response, next) => {
  console.log("In another middleware");
  response.sendFile(path.join(routeDir, "views", "add-product.html"));
});

router.post("/add-product", (request, response, next) => {
  console.log(request.body);
  products.push({ title: request.body });
  response.redirect("/");
});

exports.routes = router;
exports.products = products;
