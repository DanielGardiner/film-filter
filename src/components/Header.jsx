'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className="w-full bg-blue-400 text-white">
      <div className="max-w-5xl mx-auto flex justify-between py-4">
        <button onClick={() => router.push('/')}>Icon</button>
        <ul className="flex gap-4">
          <li><Link href="/movie/add">Add Movie</Link></li>
          <li><Link href="/genre/add">Add Genre</Link></li>
        </ul>
      </div>
    </header>
  )
}

export default Header