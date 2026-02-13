import { KakaoLoginBtn, GoogleLoginBtn } from "@/features/auth";

export function SocialLogin() {
  return (
    <div className="flex flex-col gap-3">
      <KakaoLoginBtn />
      <GoogleLoginBtn />
    </div>
  );
}
