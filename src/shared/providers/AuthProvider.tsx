"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/entities/auth";
import { FullPageLoader } from "@/widgets";

const PUBLIC_PATHS = ["/login"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading, init } = useAuthStore();

  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  const isLoginPage = pathname === "/login" && !pathname.includes("/callback");

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated && !isPublicPath) {
      router.replace("/login");
    }

    if (isAuthenticated && isLoginPage) {
      router.replace("/");
    }
  }, [isAuthenticated, isLoading, isPublicPath, isLoginPage, router]);

  if (isLoading || (!isAuthenticated && !isPublicPath)) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
