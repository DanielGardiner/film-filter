import prisma from "../../../database";

async function Genre({ params }) {
  const { genreId } = params;

  const movies = await prisma.movie.findMany({
    where: {
      genres: {
        some: {
          genre: {
            id: genreId,
          },
        },
      },
    },
  });

  return (
    <div className="mt-5">
      <div>Genre</div>
    </div>
  );
}

export default Genre;
