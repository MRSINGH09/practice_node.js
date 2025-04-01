const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(`<h1 style="color:orange;font-size=40px;">hello duniya!</h1>`);
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
