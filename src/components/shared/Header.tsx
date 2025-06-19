'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Header = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const data = JSON.parse(userData);
        const name = data?.find((item) => item.marker === 'name')?.value;
        setUserName(name);
      } catch (err) {
        console.error('Failed to parse user data from localStorage', err);
      }
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center py-2 px-4">
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/buy">BUY</Link>
          <Link href="/sel">SELL</Link>
          <Link href="/journey">JOURNEY</Link>
        </nav>

        <Link href="/" className="text-xl font-bold tracking-tight">
          THE MODERN HOUSE
        </Link>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm cursor-pointer" asChild>
            <Link href="/auth/login">
              {userName ? `Hello, ${userName}` : 'Login'}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
