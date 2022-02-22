const axios = require("axios");
const api = "http://localhost:8000/api/user/";

async function createUser(user) {
  try {
    await axios.post(api, user).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function updateUser(user) {
  try {
    await axios.put(api, user).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getUserByUsername(username) {
  try {
    await axios.put(api + username).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export { createUser, getUserByUsername, updateUser };
