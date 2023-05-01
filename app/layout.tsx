import { ReactNode, Suspense } from 'react';
import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';

import Navbar from 'frontend/components/Layout/navbar';

import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  description: `${SITE_NAME} Description`,
  keywords: ['Keyword']
};

const noto_kr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  style: ['normal'],
  variable: '--font-noto'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={clsx(noto_kr.className)}>
      <body
        className={clsx(
          `m-auto max-w-xl bg-gray-200 text-white selection:bg-fuchsia-600 selection:text-white`
        )}
      >
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Suspense>
          <main className="min-h-screen bg-dark px-5 pt-6">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
