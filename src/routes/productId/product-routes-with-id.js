const fs = require("fs");

const { pathToProducts } = require("../../db/pathes");
const { getValueQuery } = require("../../helpers/getDataQueryHelper");
const { getDataFromFile } = require("../../helpers/getDataResponseHelper");
const response = require("../../helpers/responseHelpers");
const {
  getResponseDataIds,
  getResponseDataCategory
} = require("../../helpers/getDataResponseHelper");

const pathProductsFile = pathToProducts();
const fileStat = fs.statSync(pathProductsFile);

const routeProductId = (req, res, id) => {
  const statusCode = 200;
  const headers = {
    "Content-Type": "aplication/json",
    "Content-Length": fileStat.size
  };
  const body = getDataFromFile(pathProductsFile).find(food => food.id === id);

  response(req, res, statusCode, headers, body);
};

const routeProductsIdsByQuery = (req, res, url) => {
  const ids = getValueQuery(url, "ids");
  const products = getDataFromFile(pathProductsFile);

  const statusCode = 200;
  const headers = {
    "Content-Type": "aplication/json",
    "Content-Length": fileStat.size
  };
  const body = getResponseDataIds(ids, products);

  response(req, res, statusCode, headers, body);
};

const routeProductsCategoryByQuery = (req, res, url) => {
  const query = getValueQuery(url, "category");
  const products = getDataFromFile(pathProductsFile);

  const statusCode = 200;
  const headers = {
    "Content-Type": "aplication/json",
    "Content-Length": fileStat.size
  };
  const body = getResponseDataCategory(query, products);
  response(req, res, statusCode, headers, body);
};

module.exports = {
  routeProductId,
  routeProductsIdsByQuery,
  routeProductsCategoryByQuery
};
