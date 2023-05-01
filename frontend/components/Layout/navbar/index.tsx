import clsx from 'clsx';
import Link from 'next/link';

export default async function Navbar() {
  return (
    <nav
      className={clsx('relative flex items-center justify-between bg-white p-5 text-black lg:px-6')}
    >
      <div className="block w-1/2">
        <Link href={process.env.SITE_DOMAIN!}>로고</Link>
      </div>
      <div className="flex w-1/2 justify-end">메뉴</div>
    </nav>
  );
}
