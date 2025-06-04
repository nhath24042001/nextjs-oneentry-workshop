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
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto mt-6 p-4">{children}</main>
      </body>
    </html>
  );
}
