const express = require("express");

const app = express();

app.use("/add-product", (request, response, next) => {
  console.log("In another middleware");
  response.send("<h1>Add Product Page</h1>");
});

app.use("/", (request, response, next) => {
  console.log("In another middleware");
  response.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
