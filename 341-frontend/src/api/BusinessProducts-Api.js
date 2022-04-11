const axios = require("axios");
const api = "http://localhost:8000/api/businessProducts/";
/**
 * gets the seller of a specific product
 * @param {*} isbn isbn of the product who'se owner is searched for
 * @returns a body containing the username of the seller
 */
async function getProductSeller(isbn) {
  const response = await axios.get(api + "getSeller" + isbn);
  return response.data.data;
}
/**
 * gets all the product being sold by a specific seller
 * @param {*} username username of a seller
 * @returns a list of products sold by the user
 */
async function getBusinessProducts(username) {
  const response = await axios.get(api + "getProducts" + username);
  return response.data.data;
}
/**
 * add the link between between a product, using its id, and a user, using the
 * usernsmr
 * @param {*} link a body containing the product ID and username of seller 
 */
async function addBusinessProduct(link) {
  try {
    const response = await axios.post(api,link).then(function (result) {
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
/**
 * remove the link between a seller and a product being sold (use this when 
 * deleting a product)
 * @param {*} productISBN the isbn of the product's link to remove 
 * @returns the success of this method
 */
async function deleteBusinessLink(productISBN){
  const response = await axios.delete(api + productISBN).then(function (result) {
    return result;
  });
  return response;
}

export { getProductSeller, getBusinessProducts, addBusinessProduct, deleteBusinessLink };
