interface FormCardProps {
  children: React.ReactNode;
  className?: string;
}

export function FormCard({ children, className = '' }: FormCardProps) {
  return (
    <div
      className={`bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-xl shadow-zinc-200/50 dark:shadow-none border border-zinc-100 dark:border-zinc-800 ${className}`}
    >
      {children}
    </div>
  );
}
