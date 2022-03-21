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

async function getMultipleProductsByIsbn(isbnList) {
  let products = [];

  for (const isbn of isbnList) {
    const response = await axios.get(api + isbn);
    products.push(response.data.data);
  }

  // isbnList.forEach((isbn) => {
  //   const response = await axios.get(api + isbn);
  //   products.push(response.data.data);
  // });
  return products;
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

async function createNewProduct(product) {
  const response = await axios.post(api, product).then(function (result) {
    return result;
  });
  return response;
}

// async function deleteProduct(isbn){
//   let response = await axios.delete(api + isbn).then(function (result) {
//     return result;
//   });
//   //deleteBusinessLink(isbn);
//   return response;
// }

export {
  getAllProducts,
  getProductByIsbn,
  getMultipleProductsByIsbn,
  updateProductByIsbn,
  createNewProduct,
};
