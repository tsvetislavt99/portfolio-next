import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';
import { formatSummary } from 'utils/format-summary';
import { getBreakpoint } from 'utils/get-breakpoint';
import { isClient } from 'utils/is-client';

interface BlogCardProps {
  type: 'Tutorial' | 'Article' | 'Project';
  updatedDate: Date;
  title: string;
  summary: string;
  href: string;
  img: string;
}

export default function FeaturedBlogCard({
  type,
  updatedDate,
  title,
  img,
  summary,
  href,
}: BlogCardProps) {
  const [summaryLength, setSummaryLength] = React.useState(132);

  const getSummaryLength = React.useCallback(() => {
    if (isClient()) {
      const breakpoint = getBreakpoint(window.innerWidth);
      if (
        breakpoint === 'md' ||
        breakpoint === 'lg' ||
        breakpoint === 'xl' ||
        breakpoint === '2xl'
      ) {
        return 550;
      }
    }
    return 132;
  }, [isClient]);

  React.useEffect(() => {
    setSummaryLength(getSummaryLength());
  }, [getSummaryLength]);

  return (
    <Link href={href}>
      <article className="md:flex gap-8 p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:border hover:border-light-accent dark:hover:border dark:hover:border-light-secondary transition duration-300">
        <div className="flex md:flex-1 flex-col">
          <div className="mx-auto mb-5 md:h-64 w-full rounded-lg relative z-20 overflow-hidden">
            <Image
              className="mx-auto mb-5 h-44 md:h-64 w-full rounded-lg relative transform transition duration-500 hover:scale-105"
              style={{ objectFit: 'cover' }}
              src={img}
              width={400}
              height={250}
              alt="Man developing website on desk Illustration by WOOBRO LTD"
            />
          </div>
          <div className="flex justify-between items-center mb-2 text-gray-500">
            <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clipRule="evenodd"
                ></path>
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
              </svg>
              {type}
            </span>
            <span className="text-sm">
              {formatDistanceToNow(updatedDate)} ago
            </span>
          </div>
        </div>
        <div className="flex md:flex-1 flex-col">
          <h2 className="mb-2 hover:underline text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400">
            {formatSummary(summary, summaryLength)}
          </p>
        </div>
      </article>
    </Link>
  );
}
