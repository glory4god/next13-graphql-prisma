import clsx from 'clsx';

export default async function Navbar() {
  return (
    <nav
      className={clsx('relative flex items-center justify-between bg-white p-5 text-black lg:px-6')}
    >
      <div className="block w-1/2">
        로고
        {/* <MobileMenu menu={menu} /> */}
      </div>
      <div className="flex w-1/2 justify-end">메뉴</div>
    </nav>
  );
}
