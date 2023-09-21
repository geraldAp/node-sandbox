// hindex was for static data in a case of dynamic data we have to use string replacement
// Html response
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  // fs.createReadStream("./hindex.html").pipe(res)
  // we need to handle this much differently since it has to do with dynamic content
  res.writeHead(200, { "Content-Type": "text/html" });
const name = "Gerald " // this is the value we need to display in hour html
  let html = fs.readFileSync(__dirname + "/htemplateindex.html", 'utf-8');// let since we plan on changing its content 
  html = html.replace("{{name}}", name);
  res.end(html);
});

server.listen(4000, () => {
  console.log("server listening on port 400");
});
