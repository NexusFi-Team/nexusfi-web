"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/entities/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Social = "kakao" | "google";

const redirectToSocialLogin = (social: Social) => {
  window.location.href = `${API_URL}/oauth2/authorization/${social}`;
};

export const useAuthActions = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  return {
    handleKakaoLogin: () => redirectToSocialLogin("kakao"),
    handleGoogleLogin: () => redirectToSocialLogin("google"),
    handleLogout: () => {
      logout();
      router.replace("/login");
    }
  };
};
