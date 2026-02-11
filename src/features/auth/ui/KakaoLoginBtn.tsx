"use client";

import { useAuth } from "../model/useAuth";

export function KakaoLoginBtn() {
  const { handleKakaoLogin } = useAuth();

  return (
    <button
      onClick={handleKakaoLogin}
      className='flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-4 text-[#191919] font-medium transition-colors hover:bg-[#FDD800]'
    >
      <svg width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9 0.5C4.30583 0.5 0.5 3.46625 0.5 7.12083C0.5 9.40333 2.025 11.4092 4.32083 12.5642L3.3825 16.0233C3.29917 16.3258 3.64333 16.5642 3.9075 16.3892L8.04667 13.6317C8.36 13.6725 8.67833 13.6942 9 13.6942C13.6942 13.6942 17.5 10.7279 17.5 7.07375C17.5 3.41958 13.6942 0.5 9 0.5Z'
          fill='#191919'
        />
      </svg>
      카카오 로그인
    </button>
  );
}
