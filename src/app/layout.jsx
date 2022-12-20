import "../styles/globals.css";
import Header from '../components/Header';
import SelectGenre from '../components/SelectGenre';
import prisma from "../database";

export default async function RootLayout({ children }) {
  const genres = await prisma.genre.findMany();

  return (
    <html lang="en">
      <body>
        <Header />
        <main className='max-w-5xl mx-auto flex'>
          <sidebar className="mt-5">
            <SelectGenre genres={genres}/>
          </sidebar>
          <div className="mt-5 ml-5">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
