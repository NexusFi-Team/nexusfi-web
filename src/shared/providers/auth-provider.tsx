"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/entities/auth";

const PUBLIC_PATHS = ["/login"];

export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading, init } = useAuthStore();

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (isLoading) return;

    const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));

    if (!isAuthenticated && !isPublicPath) {
      router.replace("/login");
    }

    if (
      isAuthenticated &&
      pathname === "/login" &&
      !pathname.includes("/callback")
    ) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <div className='h-8 w-8 animate-spin rounded-full border-4 border-zinc-300 border-t-zinc-900' />
      </div>
    );
  }

  return <>{children}</>;
}
