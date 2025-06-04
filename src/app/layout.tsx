import './globals.css';
import { Header } from '@/components/shared/Header';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Workshop Portal',
  description: 'Đăng ký và quản lý các buổi workshop',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="text-black dark:text-white transition-colors duration-300 ease-in-out">
        <Header />
        {children}
      </body>
    </html>
  );
}
