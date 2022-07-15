import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, CodeIcon } from '@heroicons/react/solid';
import ThemeToggler from 'components/ThemeToggler';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const handleNav = () => {
    setNav((nav) => !nav);
    if (mobileSearch) {
      setMobileSearch((mobileSearch) => !mobileSearch);
    }
  };

  const handleMobileSearch = () => {
    setMobileSearch((mobileSearch) => !mobileSearch);
    if (nav) {
      setNav((nav) => !nav);
    }
  };

  return (
    <>
      <div className="flex flex-nowrap justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-dark-primary dark:text-light-primary">
        <h1 className="flex w-content text-2xl font-extrabold text-dark uppercase select-none">
          <CodeIcon
            className="h-8 w-8"
            color="text-dark-primary dark:text-light-primary"
          />
          <span className="ml-3">
            <Link href="/">t.works</Link>
          </span>
        </h1>
        <ul className="sm:flex hidden">
          <li className="p-4 flex flex-row">
            <ThemeToggler />
            <div className="border-r-2 border-dark-primary dark:border-light-primary pl-5" />
          </li>
          <li className="p-4">
            <Link href="/">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/">Technology</Link>
          </li>
          <li className="p-4">
            <Link href="/">About</Link>
          </li>
        </ul>
        {/** Mobile nav */}
        <div className="flex flex-row flex-nowrap sm:hidden">
          <div
            onClick={handleMobileSearch}
            className="text-white block mr-2 sm:hidden"
          >
            <ThemeToggler />
          </div>
          <div onClick={handleNav} className="block sm:hidden">
            {nav ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </div>
        </div>
        <div
          className={
            nav
              ? 'sm:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-light-primary dark:bg-dark-primary ease-in-out duration-500 z-10'
              : 'fixed left-[-100%]  ease-out duration-1000'
          }
        >
          <h1 className="flex flex-row items-center mt-3 ml-3 w-full text-3xl font-extrabold text-dark uppercase">
            <CodeIcon
              className="h-8 w-8"
              color="text-dark-primary dark:text-light-primary"
            />
            <span className="ml-3">
              <Link href="/">t.works</Link>
            </span>
          </h1>
          <ul className="pt-8 uppercase">
            <li className="p-4 border-b border-b-gray-900">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 border-b border-b-gray-900">
              <Link href="/catalog">Catalog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
