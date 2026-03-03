'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Spinner } from '@/shared/ui';

type Gender = 'MALE' | 'FEMALE';

export function ProfileForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState<Gender | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = name.trim() && birthDate && gender;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // TODO: API 호출
      router.replace('/');
    } catch {
      // TODO: 에러 처리
    } finally {
      setIsLoading(false);
    }
  };

  const inputClassName = `
    w-full h-14 px-4 rounded-xl
    border border-zinc-200 dark:border-zinc-700
    bg-zinc-50 dark:bg-zinc-800
    text-zinc-900 dark:text-white
    placeholder:text-zinc-400
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white dark:focus:bg-zinc-900
    transition-all duration-200
  `;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          이름
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
          className={inputClassName}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          생년월일
        </label>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
          성별
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setGender('MALE')}
            className={`h-14 rounded-xl border-2 font-semibold transition-all duration-200 ${
              gender === 'MALE'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/20'
                : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }`}
          >
            남성
          </button>
          <button
            type="button"
            onClick={() => setGender('FEMALE')}
            className={`h-14 rounded-xl border-2 font-semibold transition-all duration-200 ${
              gender === 'FEMALE'
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shadow-lg shadow-blue-500/20'
                : 'border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }`}
          >
            여성
          </button>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={!isFormValid || isLoading}
          className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-y-0"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <Spinner size="sm" className="border-white border-t-transparent" />
              처리 중...
            </span>
          ) : (
            '시작하기'
          )}
        </button>
      </div>
    </form>
  );
}
