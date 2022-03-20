const axios = require("axios");
const api = "http://localhost:8000/api/carts/";

async function getOrders(username) {
  const response = await axios.get(api + username);
  return response.data.data;
}

async function placeOrder(username,order) {
  const response = await axios.put(api + username , order).then(function (result) {
    return result;
  });;
}


export { getOrders, placeOrder};
