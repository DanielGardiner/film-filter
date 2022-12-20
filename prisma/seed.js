const { PrismaClient } = require("@prisma/client");
const fetchAllGenres = require("./fetchAllGenres");
const fetchTopRatedMovies = require("./fetchTopRatedMovies");

const prisma = new PrismaClient();

const getMovieGenres = (movie) => {
  const output = [];

  movie.forEach((movie) => {
    const movieId = movie.id;
    const genreIds = movie.genre_ids;

    genreIds.forEach((genreId) => {
      output.push({
        movieId,
        genreId,
      });
    });
  });
    
  return output;
}

async function main() {
  // Clear existing data
  await prisma.genre.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.movieGenres.deleteMany();

  // Fetch data from external API
  const genres = await fetchAllGenres();
  const movies = await fetchTopRatedMovies();

  // Populate database with data
  await prisma.genre.createMany({
    data: genres,
  });
  await prisma.movie.createMany({
    data: movies.map((movie) => ({
      id: movie.id,
      adult: movie.adult,
      backdropPath: movie.backdrop_path,
      originalLanguage: movie.original_language,
      originalTitle: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      posterPath: movie.poster_path,
      releaseDate: new Date(movie.release_date),
      title: movie.title,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      genres: {
        create: movie.genre_ids
      }
    })),
  });
  // await prisma.movieGenres.createMany({
  //   data: getMovieGenres(movies),
  // });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
