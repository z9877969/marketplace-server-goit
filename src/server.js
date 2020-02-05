const http = require("http");
const url = require("url");
const path = require("path");
const router = require("./routes/router");
const routesQuery = require("./routes/routes-query");

const startServer = port => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const routeTrue = !!router[parsedUrl.pathname];

    // if (!routeTrue) {
    //   router.default(req, res);
    // } else {
    routesQuery(req, res, parsedUrl);
    // }
  });

  server.listen(port, err => {
    if (err) {
      return console.log("Something bad happened", err);
    }
    console.log("==============================");
    console.log(`Server starting on port --${port}`);
    console.log("==============================");
  });
};

module.exports = startServer;
