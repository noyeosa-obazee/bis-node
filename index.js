const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 3000;

const home = fs.readFileSync("index.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contactMe = fs.readFileSync("contact-me.html", "utf-8");
const page404 = fs.readFileSync("404.html", "utf-8");

app.get("/", (req, res) => res.send(home));
app.get("/about", (req, res) => res.send(about));
app.get("/contact-me", (req, res) => res.send(contactMe));
app.use((req, res, next) => {
  res.status(404).send(page404);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server listening now on port ${PORT}!`);
});
