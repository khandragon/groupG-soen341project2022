const axios = require("axios");
const api = "http://localhost:27017/api/accounts/";

async function getAccountInformation(username) {
  try {
    const response = await axios.get(api + username).then(function (result) {
      console.log(result);
      return result;
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function updateAccountInformation(updatedAccount) {
  console.log("hello");
  const response = await axios
    .put(api + updatedAccount.username, updatedAccount)
    .then(function (result) {
      console.log(result);
      return result;
    });
  return response;
}

export { getAccountInformation, updateAccountInformation };
