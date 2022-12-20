import Image from 'next/image';
import React from 'react';

interface RecomendationProps {
  id: number;
  name: string;
  picture: string;
  position: string;
  date: string;
  description: string;
  linkToProfile: string;
}

export default function Recommendation({
  name,
  picture,
  position,
  date,
  description,
  linkToProfile,
}: RecomendationProps): JSX.Element {
  return (
    <article className="max-w-[85%] mx-auto xl:max-w-[100%]">
      <div className="flex items-center mb-4 space-x-4">
        <a href={linkToProfile} target="_blank" rel="noopener noreferrer">
          <Image
            className="w-10 h-10 rounded-full"
            src={picture}
            height={50}
            width={50}
            alt={name + ' photo'}
          />
        </a>
        <div className="space-y-1 font-medium dark:text-white">
          <div>
            <a
              className="hover:underline"
              href={linkToProfile}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}{' '}
            </a>
            <div className="block text-sm text-gray-500 dark:text-gray-400">
              {position}
            </div>
          </div>
        </div>
      </div>

      <footer className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <p>{date}</p>
      </footer>
      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </article>
  );
}
