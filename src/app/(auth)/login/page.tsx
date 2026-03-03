import { SocialLogin } from '@/features/auth';
import { FormCard, PageTitle } from '@/widgets';

export default function LoginPage() {
  return (
    <>
      <PageTitle title="로그인" subtitle="소셜 계정으로 간편하게 시작하세요" />

      <FormCard>
        <SocialLogin />

        <div className="mt-6 text-center">
          <p className="text-xs text-zinc-400">
            로그인 시{' '}
            <a href="#" className="text-blue-600 hover:underline">
              이용약관
            </a>{' '}
            및{' '}
            <a href="#" className="text-blue-600 hover:underline">
              개인정보처리방침
            </a>
            에 동의합니다
          </p>
        </div>
      </FormCard>
    </>
  );
}
