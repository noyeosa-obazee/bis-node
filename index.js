const http = require("node:http");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("The Home Page");
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("The About Page");
    } else if (req.url === "/contact-me") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("How to Contact me");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("Page not Found - 404");
    }
  })
  .listen(8080, () => console.log("Server is running on port 8000"));
