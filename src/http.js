const axios = require("axios");

const fetchAPI = (apiUrl = "https://jsonplaceholder.typicode.com/posts") => {
  // Make a request for a user with a given ID
  return axios
    .get(apiUrl)
    .then(function (response) {
      // handle success
      //console.log(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      return error;
    });
};

//Calling in the async way
const asyncFetch = async (apiUrl) => {
  //trying to call the API!
  try {
    let response = await http.fetchAPI(apiUrl);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchAPI,
};
