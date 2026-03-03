import { ProfileForm } from '@/features/profile';
import { FormCard, PageTitle } from '@/widgets';

export default function ProfilePage() {
  return (
    <>
      <PageTitle
        title="프로필 설정"
        subtitle="서비스 이용을 위해 기본 정보를 입력해주세요"
      />
      <FormCard>
        <ProfileForm />
      </FormCard>
    </>
  );
}
