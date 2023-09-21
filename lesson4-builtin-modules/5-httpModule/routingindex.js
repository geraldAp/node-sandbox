// routing
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // using a switch statement to determine the route
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("home page");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("about page");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("contact page");
      break;
    case "/api":
      res.writeHead(200, { "Content-Type": "application/json" });
      const superHero = {
        name: "Iron Man",
        power: "rich",
        aliance: "Avengers ",
      };
      res.end(JSON.stringify(superHero));
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 not found");
  }
});

server.listen(4000, () => {
  console.log("server listening on port 400");
});
