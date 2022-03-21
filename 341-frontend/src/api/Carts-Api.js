const axios = require("axios");
const api = "http://localhost:8000/api/carts/";

async function getCart(cartID) {
  const response = await axios.get(api + cartID);
  return response.data.data;
}

async function addToCart(cartID, isbn) {
  const response = await axios
    .put(api, { cartID: cartID, isbn: isbn })
    .then(function (result) {
      return result;
    });
}

async function removeFromCart(cartID, isbn) {
  try {
    const response = await axios
      .delete(api + cartID, "_" + isbn)
      .then(function (result) {
        return result;
      });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

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
