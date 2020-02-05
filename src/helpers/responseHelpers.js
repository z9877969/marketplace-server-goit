const response = (req, res, statusCode, head, body) => {
  res.writeHead(statusCode, head);
  res.write(JSON.stringify(body));
  res.end();
};

module.exports = response;
