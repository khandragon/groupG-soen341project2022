const axios = require("axios");
const api = "http://localhost:8000/api/homepage/";

async function getHomeProducts() {
    const response = await axios.get(api);
    return response.data.data;
}

export { getHomeProducts };


