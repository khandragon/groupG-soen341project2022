const axios = require("axios");
const api = "http://localhost:8000/api/user/";
/**
 * 
 * @param {*} user 
 * @returns 
 */
async function createUser(user) {
  return await axios.post(api, user).then((res) => {
    return res.data.data;
  });
}

async function updateUser(username, user) {
  return await axios.put(api + username, user).then((res) => {
    return res.data.data;
  });
}

async function getUserByUsername(username) {
  return await axios.get(api + username).then((res) => {
    return res.data.data;
  });
}

export { createUser, getUserByUsername, updateUser };
