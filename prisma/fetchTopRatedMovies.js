// const fetch = require("node-fetch");
// const endpoints = require("../../statics/endpoints.js");

// const fetchTopRatedMovies = async () => {
//   const { moviesTopRated } = endpoints;
//   try {
//     const response = await fetch(moviesTopRated, { method: "GET" });
//     const data = await response.json();
//     return data?.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = fetchTopRatedMovies;