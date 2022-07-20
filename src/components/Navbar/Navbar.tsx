import React, { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, CodeIcon } from '@heroicons/react/solid';
import OutsideClickHandler from 'react-outside-click-handler';
import ThemeToggler from 'components/ThemeToggler';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((nav) => !nav);
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
          <div className="text-white block mr-2 sm:hidden">
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
        <OutsideClickHandler
          display="contents"
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onOutsideClick={nav ? handleNav : () => {}}
        >
          <div
            className={
              nav
                ? 'sm:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-light-primary dark:bg-dark-primary ease-in-out duration-500 z-20'
                : 'fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 h-full bg-light-primary dark:bg-dark-primary ease-out duration-1000 z-20'
            }
          >
            <h1 className="flex flex-row items-center my-5 mx-3 w-full text-2xl font-extrabold text-dark uppercase">
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
                <Link href="/">Projects</Link>
              </li>
              <li className="p-4 border-b border-b-gray-900">
                <Link href="/catalog">Technology</Link>
              </li>
              <li className="p-4 border-b border-b-gray-900">
                <Link href="/catalog">About</Link>
              </li>
            </ul>
          </div>
        </OutsideClickHandler>
        <div
          className={
            nav
              ? 'sm:hidden fixed left-0 top-0 w-[100%] h-screen opacity-60 bg-dark-primary z-10'
              : 'fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 h-full bg-light-primary dark:bg-dark-primary   z-10'
          }
        ></div>
      </div>
    </>
  );
}
