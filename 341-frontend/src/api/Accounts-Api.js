const axios = require("axios");
const api = "http://localhost:8000/api/accounts/";

async function getAccountInformation(username) {
  return await axios.get(api + username).then((res) => {
    console.log(res.data.data);
    return res.data.data;
  });
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
