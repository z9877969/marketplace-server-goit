const fs = require("fs");
const path = require("path");

const productsRoute = (req, res) => {
  const filePath = path.join(
    __dirname,
    "../../",
    "db/products",
    "all-products.json"
  );
  const fileStat = fs.statSync(filePath);
  const dataFile = fs.readFileSync(filePath);

  res.writeHead(200, {
    "Content-Type": "aplication/json",
    "Content-Length": fileStat.size
  });
  res.write(dataFile);

  res.end();
};

module.exports = productsRoute;
