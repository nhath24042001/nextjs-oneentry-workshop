import { Button } from '../ui/button';
import Link from 'next/link';

export const Header = () => {

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Quản trị', href: '/admin' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950">
      <div className="container mx-auto border-b-1 flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-xl font-bold tracking-tight lowercase">
          Workshop
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm cursor-pointer" asChild>
            <Link href="/auth/login">Login</Link>
          </Button>

          <Button className="text-sm cursor-pointer" asChild>
            <Link href="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
