const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

const users = [];

// app.engine(
//   "hbs",
//   expressHbs({
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response, next) => {
  response.render("index", { pageTitle: "Add User" });
});

app.get("/users", (request, response, next) => {
  response.render("users", {
    pageTitle: "User",
    users: users,
    hasUsers: users.length > 0,
  });
});

app.post("/add-user", (request, response, next) => {
  users.push({ name: request.body.username });
  response.redirect("/users");
});

app.listen(4000);
