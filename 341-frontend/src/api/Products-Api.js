const axios = require("axios");
const api = "http://localhost:8000/api/products/";
/**
 * get all the products in the database
 * @returns a list of all the products
 */
async function getAllProducts() {
  const response = await axios.get(api);
  return response.data.data;
}
/**
 * get a specific product 
 * @param {*} isbn isbn of the product to get 
 * @returns body of the product found, if any
 */
async function getProductByIsbn(isbn) {
  const response = await axios.get(api + isbn);
  return response.data.data;
}
/**
 * get multipple products 
 * @param {*} isbnList list of the isbns of the products to get
 * @returns list of the products
 */
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
/**
 * update the information of a product
 * @param {*} isbn isbn of the product to update
 */
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
/**
 * creates a new product and adds it to the database
 * @param {*} product the product to add
 * @returns the success status of this method
 */
async function createNewProduct(product) {
  const response = await axios.post(api , product).then(function (result) {
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
