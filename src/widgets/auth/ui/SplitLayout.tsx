import Image from 'next/image';
import { BrandingPanel } from './BrandingPanel';

interface SplitLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  features?: React.ReactNode;
}

export function SplitLayout({
  children,
  title,
  subtitle,
  features,
}: SplitLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <BrandingPanel title={title} subtitle={subtitle} features={features} />

      <div className="flex w-full lg:w-1/2 items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-8 lg:hidden">
            <Image
              src="/nexusfiLogo.png"
              alt="NexusFi Logo"
              width={64}
              height={64}
            />
          </div>
          {children}
          <p className="mt-8 text-center text-xs text-zinc-400">
            © 2026 NexusFi. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
