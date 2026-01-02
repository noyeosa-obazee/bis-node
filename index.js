const http = require("node:http");
const fs = require("fs");

const home = fs.readFileSync("index.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contactMe = fs.readFileSync("contact-me.html", "utf-8");
const page404 = fs.readFileSync("404.html", "utf-8");

http
  .createServer(function (req, res) {
    console.log("Request received for:", req.url);
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(home);
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(about);
    } else if (req.url === "/contact-me") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(contactMe);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(page404);
    }
  })
  .listen(8080, () => console.log("Server is running on port 8080"));
