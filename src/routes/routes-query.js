const qs = require("query-string");
const router = require("./router");
const {
  routeProductsIdsByQuery,
  routeProductsCategoryByQuery
} = require("./productId/product-routes-with-id");

const selectRouteByUrl = (req, res, url) => {
  const parsePath = url.pathname.split("/");

  if (parsePath.length <= 2 && !url.path.includes("?")) {
    const routeDo = router[url.pathname] || router.default;

    routeDo(req, res);
  } else if (parsePath.length === 3 && !isNaN(+parsePath[2])) {
    const routeProductId = router["/products/id"];
    const id = +parsePath[2];

    routeProductId(req, res, id);
  } else if (url.pathname === "/products" && url.path.includes("?")) {
    const queryKey = Object.keys(qs.parseUrl(url.path).query)[0];

    switch (queryKey) {
      case "ids":
        return routeProductsIdsByQuery(req, res, url);

      case "category":
        return routeProductsCategoryByQuery(req, res, url);

      default:
        return router.default(req, res);
    }
  }
};

module.exports = selectRouteByUrl;
