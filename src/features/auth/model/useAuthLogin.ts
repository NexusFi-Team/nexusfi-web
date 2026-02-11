const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Social = "kakao" | "google";

const login = (social: Social) => {
  window.location.href = `${API_URL}/oauth2/authorization/${social}`;
};

export const useAuthLogin = () => ({
  kakaoLogin: () => login("kakao"),
  googleLogin: () => login("google")
});
