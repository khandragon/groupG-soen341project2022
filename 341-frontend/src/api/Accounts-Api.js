const axios = require("axios");
const api = "http://localhost:8000/api/accounts/";

/**
 * gets the information of one account
 * @param {*} username the username of the user who's information is needed
 * @returns all the information related to that user
 */
async function getAccountInformation(username) {
  return await axios.get(api + username).then((res) => {
    return res.data.data;
  });
}
/**
 * updates an account's information
 * @param {*} updatedAccount must be a body containing all the parameters
 * of an account to be updated
 * @returns the success of the update, and the username if it was successfull
 */
async function updateAccountInformation(updatedAccount) {
  const response = await axios
    .put(api + updatedAccount.username, updatedAccount)
    .then(function (result) {
      return result;
    });
  return response;
}
/**
 * creates a new account
 * @param {*} account must be a body containing all the parameters of an account
 * @returns the success of the creation and the ID if the account was created
 */
async function createNewUserAccount(account) {
  const response = await axios.post(api, account).then(function (result) {
    return result;
  });
  return response;
}

/**
 * gets all the accounts in the database
 * @returns a list of all the accounts in the database
 */
async function getAllAccounts() {
  const response = await axios.get(api).then(function (result) {
    return result;
  });
  return response;
}

export {
  getAccountInformation,
  updateAccountInformation,
  createNewUserAccount,
  getAllAccounts,
};
