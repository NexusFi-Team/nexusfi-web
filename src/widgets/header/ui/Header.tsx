"use client";

import { LogoutBtn } from "@/features/auth";
import Link from "next/link";

export function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Link
          href='/'
          className='text-xl font-bold text-zinc-900 dark:text-white'
        >
          NexusFi
        </Link>
        <nav className='flex items-center gap-4'>
          <LogoutBtn />
        </nav>
      </div>
    </header>
  );
}
