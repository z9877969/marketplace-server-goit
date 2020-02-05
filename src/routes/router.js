const main = require("./main/main-route");
const userSignUp = require("./users/signup-route");
const products = require("./products/products-route");
const { routeProductId } = require("./productId/product-routes-with-id");

const routeFunc = () => {
  return "/products";
};

const routes = {
  "/signup": userSignUp,
  "/products": products,
  "/products/id": routeProductId,
  default: main
};

module.exports = routes;
