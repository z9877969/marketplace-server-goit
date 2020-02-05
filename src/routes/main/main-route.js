const mainRoute = (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.end(
    "<h1>Hello! You connect to Main route, and can`t get any from it :(  Try again! </h1>"
  );
};

module.exports = mainRoute;
