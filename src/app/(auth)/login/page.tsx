import { KakaoLoginButton } from '@/features/auth';

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="w-full max-w-sm space-y-6 p-6">
        <h1 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
          로그인
        </h1>
        <KakaoLoginButton />
      </div>
    </div>
  );
}
