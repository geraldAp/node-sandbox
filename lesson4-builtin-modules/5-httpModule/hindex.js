
// Html response 
const http = require("http");
// since we need to read the file we import the fs module 
const fs = require("fs");   


const server = http.createServer((req, res) => {
// getting the html file contents using the fs module
// const html = fs.readFileSync("./hindex.html");


// now the down side here is if the file is large it will take long to read so we then resolve to using streams 
const html = fs.createReadStream( __dirname + "/hindex.html"); //for simplicity we can use a relative path without including dirname 


// if we want this parsed as html we need to specify the content type  { "Content-Type":"text/html" }

res.writeHead(200, { "Content-Type":"text/html" });
// we dont build html as a string although we can instead we build the html file and send the file contents as a response 
//   res.end(html);


// now the down side here is if the file is large it will take long to read so we then resolve to using streams  and pipe 
fs.createReadStream("./hindex.html").pipe(res)


});

server.listen(4000, () => {
  console.log("server listening on port 400");
});
