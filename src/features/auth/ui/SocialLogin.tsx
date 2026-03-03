import { KakaoLoginBtn, GoogleLoginBtn } from '@/features/auth';

export function SocialLogin() {
  return (
    <div className="flex flex-col gap-4">
      <KakaoLoginBtn />
      <GoogleLoginBtn />

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-700" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white dark:bg-zinc-900 px-4 text-zinc-400">
            간편하게 시작하세요
          </span>
        </div>
      </div>
    </div>
  );
}
