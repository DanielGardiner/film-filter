import Image from "next/image";
import MovieLink from "../../../components/MovieLink";
import prisma from "../../../database";

async function Movie({ params }) {
  const { movieId } = params;

  const movie = await prisma.movie.findUnique({
    where: {
      id: parseInt(movieId),
    },
  });

  console.log('%c [qq]: ooo ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;');
  console.log('%c [qq]: movie ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', movie, '\n\n');


  const poster = `https://image.tmdb.org/t/p/w500${movie.posterPath}`

  console.log('%c [qq]: poster ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', poster, '\n\n');

  // Add artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 700));

  return (
    <div>
      <h1 className="text-xl font-medium mb-2">{movie.title}</h1>
      <div className="mb-4">
        {movie.overview}
      </div>
      <Image src={poster} alt="" width={300} height={500} />
    </div>
  );
}

export default Movie;
