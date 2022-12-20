"use client";

import Link from "next/link";

function MovieLink({ movie }) {
  return (
    <>
      <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
    </>
  );
}

export default MovieLink;
