'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';

export default function LoginCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      setToken(token);
      router.replace('/');
    } else {
      router.replace('/login');
    }
  }, [searchParams, router, setToken]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 mx-auto" />
        <p className="mt-4 text-zinc-600">로그인 처리 중...</p>
      </div>
    </div>
  );
}
