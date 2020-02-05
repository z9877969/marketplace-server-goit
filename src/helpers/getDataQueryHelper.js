const qs = require("query-string");

const getValueQuery = (url, keyQuery) => {
  const query = qs
    .parseUrl(url.path)
    .query[keyQuery].split("")
    .filter(el => el !== " ");

  const queryArr = query.splice(1, query.length - 2).join("");
  if (queryArr.includes(",")) return queryArr.split(",");

  return queryArr;
};
module.exports = {
  getValueQuery
};
