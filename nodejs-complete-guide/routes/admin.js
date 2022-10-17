const express = require("express");

const router = express.Router();

router.get("/add-product", (request, response, next) => {
  console.log("In another middleware");
  console.log(request);
  response.send(
    `<form action="/admin/add-product" method = "POST">
      <input type="text" name="title"/>
      <button type="submit">Add Product</button>
      </form>`
  );
});

router.post("/add-product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
