const fs = require("fs");

const getDataFromFile = pathFile => {
  const dataFile = fs.readFileSync(pathFile);
  const dataParsed = JSON.parse(dataFile);

  return dataParsed;
};

const getResponseDataIds = (ids, products) => {
  const listProductsByQuery = [...products].filter(product =>
    ids.find(id => product.id.toString() === id)
  );

  if (!listProductsByQuery.length)
    return { status: "no products", products: [] };

  const dataResponse = [...listProductsByQuery].map(prod => {
    const { id, sku, name, description } = prod;
    return { id, sku, name, description };
  });

  return {
    status: "success",
    products: dataResponse
  };
};

const getResponseDataCategory = (category, products) => {
  const listProductsByQuery = [...products].filter(
    product => product.categories.join("").trim() === category
  );

  if (!listProductsByQuery.length)
    return { status: "no products", products: [] };

  const dataResponse = [...listProductsByQuery].map(prod => {
    const { id, sku, name, description } = prod;
    return { id, sku, name, description };
  });

  return {
    status: "success",
    products: dataResponse
  };
};

module.exports = {
  getDataFromFile,
  getResponseDataIds,
  getResponseDataCategory
};
