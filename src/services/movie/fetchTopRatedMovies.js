import fetch from "node-fetch";
import { endpoints } from "../../statics/endpoints.js";

const fetchTopRatedMovies = async () => {
  const { moviesTopRated } = endpoints;
  try {
    const response = await fetch(moviesTopRated, { method: "GET" });
    const data = await response.json();
    return data?.results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchTopRatedMovies;