import Image from 'next/image';

interface BrandingPanelProps {
  title: string;
  subtitle: string;
  features?: React.ReactNode;
}

export function BrandingPanel({ title, subtitle, features }: BrandingPanelProps) {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 items-center justify-center p-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-lg text-white relative z-10">
        <div className="mb-10 flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl scale-150" />
            <Image
              src="/nexusfiLogo.png"
              alt="NexusFi Logo"
              width={72}
              height={72}
              className="relative drop-shadow-2xl"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight">NexusFi</span>
        </div>

        <h1 className="text-5xl font-bold mb-6 leading-tight tracking-tight">
          {title}
        </h1>

        <p className="text-xl text-white/80 leading-relaxed">{subtitle}</p>

        {features && <div className="mt-14">{features}</div>}
      </div>
    </div>
  );
}
