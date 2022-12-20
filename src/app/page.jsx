import SelectGenre from "../components/SelectGenre";
import { Suspense } from "react";
import prisma from "../database";

async function HomePage() {
  const genres = await prisma.genre.findMany();

  return (
    <>
      <div>
        Home Page...
      </div>
    </>
  );
}

export default HomePage;
