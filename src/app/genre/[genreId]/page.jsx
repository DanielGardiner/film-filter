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
    }
  });
  
  return (
    <div className="mt-5">
      <h1 className="text-xl">{genre.name}</h1>
      <ul>
      {movies?.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
      </ul>
    </div>
  );
}

export default Genre;
