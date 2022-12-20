'use client';

import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  return (
    <header className="w-full bg-blue-400 text-white">
      <div className="max-w-5xl mx-auto flex justify-between py-4">
        <button onClick={() => router.push('/')}>Icon</button>
        <ul className="flex gap-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </div>
    </header>
  )
}

export default Header