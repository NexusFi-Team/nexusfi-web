import type { Metadata } from "next";
import { Suspense } from "react";
import QueryProvider from "@/shared/providers/query-provider";
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
            <div className='flex min-h-screen flex-col'>{children}</div>
          </Suspense>
        </QueryProvider>
      </body>
    </html>
  );
}
