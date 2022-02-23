const axios = require("axios");
const api = "http://localhost:8000/api/products/";

async function getAllProducts() {
  const response = await axios.get(api);
  return response.data.data;
}

async function getProductByIsbn(isbn) {
  const response = await axios.get(api + isbn);
  return response.data.data;
}

async function updateProductByIsbn(isbn) {
  try {
    const response = await axios.put(api + isbn).then(function (result) {
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { getAllProducts, getProductByIsbn, updateProductByIsbn };
