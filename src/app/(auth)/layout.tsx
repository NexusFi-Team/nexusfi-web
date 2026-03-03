'use client';

import { usePathname } from 'next/navigation';
import { SplitLayout } from '@/widgets';

const PAGE_CONFIG = {
  '/login': {
    title: '스마트한 금융의 시작',
    subtitle: 'NexusFi와 함께 더 쉽고 안전한 자산 관리를 경험하세요.',
  },
  '/profile': {
    title: '거의 다 됐어요!',
    subtitle: '몇 가지 정보만 입력하면 NexusFi의 모든 서비스를 이용할 수 있어요.',
  },
} as const;

const DEFAULT_CONFIG = {
  title: 'NexusFi',
  subtitle: '금융의 새로운 시작',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const config = PAGE_CONFIG[pathname as keyof typeof PAGE_CONFIG] ?? DEFAULT_CONFIG;

  return (
    <SplitLayout title={config.title} subtitle={config.subtitle}>
      {children}
    </SplitLayout>
  );
}
