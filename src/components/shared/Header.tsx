import { Button } from '../ui/button';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center py-4 px-4">
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href={'/buy'}>BUY</Link>
          <Link href={'/sel'}>SELL</Link>
          <Link href={'/journey'}>JOURNEY</Link>
        </nav>

        <Link href="/" className="text-xl font-bold tracking-tight lowercase">
          THE MODERN HOUSE
        </Link>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm cursor-pointer" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
