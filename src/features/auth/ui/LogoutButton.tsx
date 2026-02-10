'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';

export function LogoutButton() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
    >
      로그아웃
    </button>
  );
}
