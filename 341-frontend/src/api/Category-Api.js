const axios = require("axios");
const api = "http://localhost:8000/api/productsCategory/";

async function getAllCategories() {
  const response = await axios.get(api);
  return response.data.data;
}

async function getAllProductsByCategories(category) {
  const response = await axios.get(api + category);
  return response.data.data;
}

export { getAllCategories, getAllProductsByCategories };
