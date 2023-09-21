const http = require("http");

// creating the server using the create server method this method takes a call back function as it first argument the function receives two arguments req and res http module also extends the event module. so it is a request listener req- incoming request from the client res - response sent to the client
const server = http.createServer((req, res) => {
  // // http status 200 for good response second argument is for specifying the content type although not compulsory it is advised and a good practice
  // //   console.log(req);
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("hello world");
// sending a json response 
const superHero = {
  name: "Iron Man",
  power: "rich",
};
// we can't send an object  directly so we have to convert it to json
res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(superHero));
});

// informing the server to listen to any incoming requests  the port number was passed in here  the second argument is optional
server.listen(4000, () => {
  console.log("server listening on port 400");
});
