import Link from 'next/link';

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-lg font-semibold">Workshop Portal</h1>
      <nav className="flex gap-4">
        <Link href="/">Trang chủ</Link>
        <Link href="/admin">Quản trị</Link>
      </nav>
    </header>
  );
}