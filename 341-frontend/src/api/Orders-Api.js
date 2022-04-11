const axios = require("axios");
const api = "http://localhost:8000/api/orders/";
/**
 * get all of a user's orders
 * @param {*} username name of the user
 * @returns list of orders relating to that user
 */
async function getOrders(username) {
  const response = await axios.get(api + username);
  return response.data.data;
}
/**
 * add an order relating to a user
 * @param {*} username username of the user
 * @param {*} order the order to add to that user
 * @returns the result status of this operation
 */
async function placeOrder(username, order) {
  return await axios.put(api + username, order).then(function (result) {
    return result;
  });
}

export { getOrders, placeOrder };
