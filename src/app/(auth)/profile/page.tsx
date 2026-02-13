"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Gender = "MALE" | "FEMALE";

export default function ProfilePage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = name.trim() && birthDate && gender;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // TODO: API 호출
      router.replace("/");
    } catch {
      // TODO: 에러 처리
    } finally {
      setIsLoading(false);
    }
  };

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
          <h1 className='text-4xl font-bold mb-4'>거의 다 됐어요!</h1>
          <p className='text-lg text-white/80 leading-relaxed'>
            몇 가지 정보만 입력하면 NexusFi의 모든 서비스를 이용할 수 있어요.
          </p>
          <div className='mt-12 space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <span>맞춤형 자산 관리 서비스</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <span>실시간 포트폴리오 분석</span>
            </div>
            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                </svg>
              </div>
              <span>AI 기반 투자 인사이트</span>
            </div>
          </div>
        </div>
      </div>

      {/* 오른쪽: 프로필 입력 영역 */}
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
              프로필 설정
            </h2>
            <p className='mt-2 text-zinc-500 dark:text-zinc-400'>
              서비스 이용을 위해 기본 정보를 입력해주세요
            </p>
          </div>

          <div className='bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* 이름 */}
              <div>
                <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'>
                  이름
                </label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='이름을 입력하세요'
                  className='w-full h-12 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>

              {/* 생년월일 */}
              <div>
                <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'>
                  생년월일
                </label>
                <input
                  type='date'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className='w-full h-12 px-4 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                />
              </div>

              {/* 성별 */}
              <div>
                <label className='block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2'>
                  성별
                </label>
                <div className='grid grid-cols-2 gap-3'>
                  <button
                    type='button'
                    onClick={() => setGender("MALE")}
                    className={`h-12 rounded-lg border font-medium transition-all ${
                      gender === "MALE"
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400"
                    }`}
                  >
                    남성
                  </button>
                  <button
                    type='button'
                    onClick={() => setGender("FEMALE")}
                    className={`h-12 rounded-lg border font-medium transition-all ${
                      gender === "FEMALE"
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400"
                    }`}
                  >
                    여성
                  </button>
                </div>
              </div>

              {/* 제출 버튼 */}
              <button
                type='submit'
                disabled={!isFormValid || isLoading}
                className='w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isLoading ? (
                  <span className='flex items-center justify-center gap-2'>
                    <svg className='animate-spin h-5 w-5' viewBox='0 0 24 24'>
                      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                    </svg>
                    처리 중...
                  </span>
                ) : (
                  "시작하기"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
