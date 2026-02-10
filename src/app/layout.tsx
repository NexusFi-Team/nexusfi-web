import type { Metadata } from "next";
import { Suspense } from "react";
import { QueryProvider, AuthProvider } from '@/shared/providers';
import "./globals.css";

export const metadata: Metadata = {
  title: "NexusFi",
  description: "NexusFi - Your Financial Platform"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <QueryProvider>
          <Suspense>
            <AuthProvider>
              <div className='flex min-h-screen flex-col'>{children}</div>
            </AuthProvider>
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
