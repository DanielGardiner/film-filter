import fetch from "node-fetch";
import { endpoints } from "../../statics/endpoints.js";

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

export default fetchAllGenres;