'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-xl font-bold">🎬 MovieMatch</div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/movies">Movies</Link></li>
        <li><Link href="/friends">Friends</Link></li>
      </ul>
    </nav>
  );
}
