import SelectGenre from "../components/SelectGenre";
import { Suspense } from "react";
import prisma from "../database";

async function HomePage() {
  const genres = await prisma.genre.findMany();

  return (
    <>
      <div className="mt-5">
        <Suspense fallback={<p>Loading...</p>}>
          <SelectGenre genres={genres}/>
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
