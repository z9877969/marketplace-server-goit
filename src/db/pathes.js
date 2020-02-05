const path = require("path");

const pathToUser = username => {
  return path.join(__dirname, "users/", `${username}.json`);
};

const pathToProducts = () => {
  return path.join(__dirname, "/products", "all-products.json");
};

module.exports = {
  pathToUser,
  pathToProducts
};
