import prisma from "../../database";

export default async function addGenre(name) {
  console.log('%c [qq]: name ', 'background: #fbff00; color: #000000; font-size: 1rem; padding: 0.2rem 0; margin: 0.5rem;', '\n', name, '\n\n');
  const genre = await prisma.genre.create({
    data: {
      name,
    },
  });

  return genre;
}
