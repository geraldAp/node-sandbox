// network io
const https = require("https"); //https is the secured version of the http module ;
MAx_CALLS = 12;

const start = Date.now();

for (let i = 0; i < MAx_CALLS; i++) {
  // making a request to google he first argument accepts a url
  // the second argument is a callback function that is called when the request is completed and has listening events
//   what we get from this experiment is this https request does not seem to use the thread pool unlike the  pbkdf2 http.request is a network i/o operation not a cpu bound operation
  https.request("https://www.google.com", (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log("request :", i + 1, "complete" , Date.now() - start);
    });
  })
  .end();
}
