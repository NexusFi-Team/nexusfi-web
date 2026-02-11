"use client";
import { useAuth } from "../model/useAuth";

export function LogoutBtn() {
  const { handleLogout } = useAuth();

  return (
    <button
      onClick={handleLogout}
      className='text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
    >
      로그아웃
    </button>
  );
}
