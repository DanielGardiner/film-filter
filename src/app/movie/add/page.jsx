import MovieAddForm from "../../../components/MovieAddForm";

export default async function MovieAdd() {
  const genres = await prisma.genre.findMany();

  const handleSubmit = async ({}) => {
  }

  return <MovieAddForm genres={genres} />;
}
