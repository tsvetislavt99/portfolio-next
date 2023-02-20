import React from 'react';
import { timelineIconsMap } from 'utils/get-timeline-icon';

interface TimelineCardProps {
  title: string;
  description: string;
  iconTitle: string;
  fromTo: string;
  company: string;
}

export default function TimelineCard({
  title,
  description,
  iconTitle,
  fromTo,
  company,
}: TimelineCardProps): JSX.Element {
  const icon = React.useMemo(() => {
    const icon = timelineIconsMap.get(iconTitle);
    return icon;
  }, [iconTitle]);

  return (
    <li className="relative mb-6 sm:mb-0 flex-1">
      <div className="flex items-center">
        <div className="flex z-10 justify-center items-center w-6 h-6 bg-light-secondary rounded-full  shrink-0">
          {icon}
        </div>
        <div className="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
      <div className="mt-3 sm:pr-8">
        <h3 className="text-dark-primary dark:text-light-primary text-lg font-semibold">
          {title}
        </h3>
        <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {company}
        </p>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {fromTo}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="my-5 lg:hidden max-lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
      </div>
    </li>
  );
}
