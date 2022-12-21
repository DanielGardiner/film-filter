import prisma from "../../database"

export default async function addGenre({name}) {
  const genre = await prisma.genre.create({
    data: {
      name
    }
  })

  return genre
}
