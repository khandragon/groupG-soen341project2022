import { createUser } from "./Users-Api";

const axios = require("axios");
const api = "http://localhost:8000/api/businessprofile/";

async function getBusinessProfileInformation(username) {
  return await axios.get(api + username).then((res) => {
    return res.data.data;
  });
}

async function updateBusinessProfileInformation(updatedBusinessProfile) {
  const response = await axios
    .put(api + updatedBusinessProfile.username, updatedBusinessProfile)
    .then(function (result) {
      return result;
    });
  return response;
}

async function createBusinessProfile(businessProfile) {
  const response = await axios.post(api, businessProfile).then(function (result) {
    return result;
  });
  return response;
}

async function getAllbusinessProfile(){
  const response = await axios.get(api).then(function (result) {
    return result;
  });
  return response;
}

module.exports = {
    getBusinessProfileInformation,
    updateBusinessProfileInformation,
    createBusinessProfileInformation,
    getAllbusinessProfile,
  };
