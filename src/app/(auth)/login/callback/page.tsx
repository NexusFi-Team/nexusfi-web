"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuthStore } from "@/entities/auth";
import { userApi } from "@/entities/user";

export default function LoginCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const handleCallback = async () => {
      const token = searchParams.get("accessToken");

      if (!token) {
        router.replace("/login");
        return;
      }

      setToken(token);

      try {
        const user = await userApi.getUser();

        if (user.isProfileCompleted) {
          router.replace("/");
        } else {
          router.replace("/profile");
        }
      } catch {
        router.replace("/login");
      }
    };

    handleCallback();
  }, [searchParams, router, setToken]);

  return (
    <div className='flex min-h-[50vh] items-center justify-center'>
      <div className='text-center'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900 mx-auto' />
        <p className='mt-4 text-zinc-600'>로그인 처리 중...</p>
      </div>
    </div>
  );
}
