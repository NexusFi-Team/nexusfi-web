import { Spinner } from '@/shared/ui';

export function FullPageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner />
    </div>
  );
}
