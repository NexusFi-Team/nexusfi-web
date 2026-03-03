'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuthStore } from '@/entities/auth';
import { useUserQuery } from '@/entities/user';
import { Spinner } from '@/shared/ui';

export default function LoginCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setToken, isAuthenticated } = useAuthStore();
  const { user, isLoading } = useUserQuery();

  useEffect(() => {
    const token = searchParams.get('accessToken');

    if (!token && !isAuthenticated) {
      router.replace('/login');
      return;
    }

    if (token) {
      setToken(token);
    }
  }, [searchParams, setToken, isAuthenticated, router]);

  useEffect(() => {
    if (isLoading || !isAuthenticated) return;

    if (user) {
      router.replace(user.isProfileCompleted ? '/' : '/profile');
    } else {
      router.replace('/login');
    }
  }, [user, isLoading, isAuthenticated, router]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <Spinner size="md" className="mx-auto" />
        <p className="mt-4 text-zinc-600">로그인 처리 중...</p>
      </div>
    </div>
  );
}
