import React from 'react';
import { BiSupport } from 'react-icons/bi';

export default function TimelineCard() {
  return (
    <li className="relative mb-6 sm:mb-0">
      <div className="flex items-center">
        <div className="flex z-10 justify-center items-center w-6 h-6 bg-light-secondary rounded-full  shrink-0">
          <BiSupport />
        </div>
        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-dark-primary dark:text-light-primary text-lg font-semibold">
          Technical Support Specialist
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          December, 2019 - August, 2020
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Provide first level technical support for one of the biggest ISP
          companies in Bulgaria.
        </p>
      </div>
    </li>
  );
}
