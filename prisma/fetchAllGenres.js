import fetch from"node-fetch";
const endpoints = require("../../statics/endpoints.js");

const fetchAllGenres = async () => {
  const { movieGeneres } = endpoints;
  try {
    const response = await fetch(movieGeneres, { method: "GET" });
    const data = await response.json();
    return data?.genres;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchAllGenres;