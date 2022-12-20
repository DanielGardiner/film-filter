const theMovieDb = "https://api.themoviedb.org/3";
const movieApiKeyV3 = process.env.MOVIE_API_KEY_V3;
const movieApiKeyV4 = process.env.MOVIE_API_KEY_V4;

const endpoints = {
  moviesTopRated: `${theMovieDb}/movie/top_rated?api_key=${movieApiKeyV3}`,
  movieGeneres: `${theMovieDb}/genre/movie/list?api_key=${movieApiKeyV3}`,
};

export { endpoints };
