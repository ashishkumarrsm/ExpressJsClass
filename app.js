const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 5000;

const sendPage = (res, fileName) => {
  const page = fs.readFileSync(path.join(__dirname, "view", fileName), "utf-8");
  res.send(page);
};

app.get("/", (req, res) => sendPage(res, "Home.html"));
app.get("/home", (req, res) => sendPage(res, "Home.html"));
app.get("/about", (req, res) => sendPage(res, "About.html"));
app.get("/user", (req, res) => sendPage(res, "user.html"));
app.get("/product", (req, res) => sendPage(res, "product.html"));
app.get("/nakuri", (req, res) => sendPage(res, "nakuri.html"));
app.get("/signup", (req, res) => sendPage(res, "signup.html"));
app.get("/login", (req, res) => sendPage(res, "login.html"));

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server running at http://localhost:${port}`);
});
