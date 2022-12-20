import prisma from "../../database";

const getAllGenres = async () => {
  const genres = await prisma.genre.findMany();

  // Add artificial delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return genres;
};

export default getAllGenres;