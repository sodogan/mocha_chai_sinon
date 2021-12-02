const chai = require("chai");
const http = require("./http");

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

asyncFetch("https://jsonplaceholder.typicode.com/posts");

/*
//trying to call the API!
http
  .fetchAPI("https://jsonplaceholder.typicode.com/posts")
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    // handle error
    console.error(error);
  });
*/
