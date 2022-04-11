const axios = require("axios");
const api = "http://localhost:8000/api/businessProducts/";

async function getProductSeller(isbn) {
  const response = await axios.get(api + "getSeller" + isbn);
  return response.data.data;
}

async function getBusinessProducts(username) {
  const response = await axios.get(api + "getProducts" + username);
  return response.data.data;
}

async function addBusinessProduct(link) {
  try {
    const response = await axios.post(api, link).then(function (result) {
      return result;
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteBusinessLink(productISBN) {
  const response = await axios
    .delete(api + productISBN)
    .then(function (result) {
      return result;
    });
  return response;
}

export {
  getProductSeller,
  getBusinessProducts,
  addBusinessProduct,
  deleteBusinessLink,
};
