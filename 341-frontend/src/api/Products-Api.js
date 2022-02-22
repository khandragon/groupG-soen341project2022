const axios = require("axios");
const api = "http://localhost:27017/api/products/";

async function getAllProducts() {
  try {
    const response = await axios.get(api).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getProductByIsbn(isbn) {
  try {
    const response = await axios.get(api + isbn).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function updateProductByIsbn(isbn) {
  try {
    const response = await axios.put(api + isbn).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { getAllProducts, getProductByIsbn, updateProductByIsbn };
