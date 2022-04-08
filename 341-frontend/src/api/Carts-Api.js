const axios = require("axios");
const api = "http://localhost:8000/api/carts/";
/**
 * get a cart by it's id
 * @param {*} cartID the id of the cart to get
 * @returns the cart 
 */
async function getCart(cartID) {
  const response = await axios.get(api + cartID);
  return response.data.data;
}
/**
 * add a product to a cart
 * @param {*} cartID id of the cart to which you wish to add a product to
 * @param {*} isbn the isbn of the product to add
 */
async function addToCart(cartID, isbn) {
  const response = await axios
    .put(api, { cartID: cartID, isbn: isbn })
    .then(function (result) {
      return result;
    });
}
/**
 * remove a product from a cart
 * @param {*} cartID id of the cart to which you wish to remove a product from
 * @param {*} isbn the isbn of the product to remove
 */
async function removeFromCart(cartID, isbn) {
  try {
    const response = await axios
      .delete(api, { data: { cartID: cartID, isbn: isbn } })
      .then(function (result) {
        return result;
      });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
/**
 * remove all the products from a cart
 * @param {*} cartID the id of the cart to clear
 */
async function clearCart(cartID) {
  try {
    const response = await axios.delete(api + cartID).then(function (result) {
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { getCart, addToCart, removeFromCart, clearCart };
