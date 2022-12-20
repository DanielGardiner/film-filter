'use client';
import { useRouter } from 'next/navigation'
import Clicky from "./Clicky"

export default function SelectGenre({genres}) {
  const router = useRouter()

  return (
    <>
      {/* <div className="flex gap-3 flex-col"> */}
      <div className="grid grid-cols-2 gap-3 w-[320px]">
        {genres.map((genre) => (
          <Clicky key={genre.id} type="primary" size="md" onClick={() => router.push(`/genre/${genre.id}`)}>
            {genre.name}
          </Clicky>
        ))}
      </div>
    </>
  )
}
