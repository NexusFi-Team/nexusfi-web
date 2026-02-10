const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Provider = "kakao" | "google";

const login = (provider: Provider) => {
  window.location.href = `${API_URL}/oauth2/authorization/${provider}`;
};

export const useAuthLogin = () => ({
  kakaoLogin: () => login("kakao"),
  googleLogin: () => login("google")
});
