import SocialSection from 'components/SocialSection';
import React from 'react';

export default function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto my-10 flex items-center justify-center">
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li className="-ml-5">
          <SocialSection />
        </li>
      </ul>
    </footer>
  );
}
