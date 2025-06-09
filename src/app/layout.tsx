import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'The Modern House',
  description: '',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="text-black dark:text-white transition-colors duration-300 ease-in-out">
        {children}
      </body>
    </html>
  );
}
