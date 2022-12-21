import MovieLink from "../../../components/MovieLink";
import prisma from "../../../database";

async function Genre({ params }) {
  const { genreId } = params;

  const genre = await prisma.genre.findUnique({
    where: {
      id: parseInt(genreId),
    },
  });

  const movies = await prisma.movie.findMany({
    where: {
      genres: {
        some: {
          genreId: parseInt(genreId),
        },
      },
    },
  });

  // Add artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 700));

  return (
    <div>
      <h1 className="text-xl font-medium mb-2">{genre.name}</h1>
      <ul>
        {movies.length === 0 && <li className="mb-1 last:mb-0">No movies found</li>}
        {movies?.map((movie) => (
          <li className="mb-1 last:mb-0" key={movie.id}>
            <MovieLink movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genre;
