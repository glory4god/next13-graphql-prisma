import { ReactNode, Suspense } from 'react';
import { Inter } from 'next/font/google';
import clsx from 'clsx';

import Navbar from 'frontend/components/Layout/navbar';

import './globals.css';

const { SITE_NAME } = process.env;

export const metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  }
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={clsx(`bg-dark text-white selection:bg-fuchsia-600 selection:text-white`)}>
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Suspense>
          <main className="px-5 pt-6">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
