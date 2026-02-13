import { SocialLogin } from "@/features/auth/ui/SocialLogin";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className='flex min-h-screen'>
      {/* 왼쪽: 브랜딩 영역 */}
      <div className='hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 items-center justify-center p-12'>
        <div className='max-w-md text-white'>
          <div className='mb-8'>
            <Image
              src='/nexusfiLogo.png'
              alt='NexusFi Logo'
              width={80}
              height={80}
            />
          </div>
          <h1 className='text-4xl font-bold mb-4'>스마트한 금융의 시작</h1>
          <p className='text-lg text-white/80 leading-relaxed'>
            NexusFi와 함께 더 쉽고 안전한 자산 관리를 경험하세요.
          </p>
          <div className='mt-12 flex gap-8'>
            <div>
              <p className='text-3xl font-bold'>10만+</p>
              <p className='text-sm text-white/70'>활성 사용자</p>
            </div>
            <div>
              <p className='text-3xl font-bold'>99.9%</p>
              <p className='text-sm text-white/70'>서비스 안정성</p>
            </div>
            <div>
              <p className='text-3xl font-bold'>24/7</p>
              <p className='text-sm text-white/70'>실시간 모니터링</p>
            </div>
          </div>
        </div>
      </div>

      {/* 오른쪽: 로그인 영역 */}
      <div className='flex w-full lg:w-1/2 items-center justify-center p-8'>
        <div className='w-full max-w-md'>
          {/* 모바일에서만 보이는 로고 */}
          <div className='flex justify-center mb-6 lg:hidden'>
            <Image
              src='/nexusfiLogo.png'
              alt='NexusFi Logo'
              width={80}
              height={80}
            />
          </div>

          <div className='text-center mb-4'>
            <h2 className='text-2xl font-bold text-zinc-900 dark:text-white'>
              로그인
            </h2>
            <p className='mt-2 text-zinc-500 dark:text-zinc-400'>
              소셜 계정으로 간편하게 시작하세요
            </p>
          </div>

          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800'>
            <SocialLogin />

            <div className='mt-6 text-center'>
              <p className='text-xs text-zinc-400'>
                로그인 시{" "}
                <a href='#' className='text-blue-600 hover:underline'>
                  이용약관
                </a>{" "}
                및{" "}
                <a href='#' className='text-blue-600 hover:underline'>
                  개인정보처리방침
                </a>
                에 동의합니다
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
