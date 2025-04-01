const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(
    '<h1 style="color:red; background-color:green;">good morning mr singh</h1>'
  );
  console.log(req.headers);
});

server.listen(3000, () => {
  console.log("server is listning on port 3000");
});
