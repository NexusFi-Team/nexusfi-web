interface PageTitleProps {
  title: string;
  subtitle: string;
}

export function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
        {title}
      </h2>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">{subtitle}</p>
    </div>
  );
}
