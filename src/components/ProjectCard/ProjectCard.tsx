import React from 'react';
import Image from 'next/image';
import { FaReact, FaPlay } from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiJsonwebtokens,
  SiTypescript,
  SiMongodb,
  SiJest,
  SiFirebase,
  SiNextdotjs,
  SiHeroku,
  SiVercel,
} from 'react-icons/si';
import { CodeIcon } from '@heroicons/react/solid';

// TODO: Cleanup

const technologyMap = new Map([
  [
    'javascript',
    <SiJavascript
      key="javascript"
      className="w-4 xs:w-6 h-4 xs:h-6 text-yellow-500"
    />,
  ],
  [
    'nodejs',
    <SiNodedotjs
      key="nodejs"
      className="w-4 xs:w-6 h-4 xs:h-6 text-green-700"
    />,
  ],
  ['express', <SiExpress key="express" className="w-4 xs:w-6 h-4 xs:h-6" />],
  [
    'jsonwebtokens',
    <SiJsonwebtokens key="jsonwebtokens" className="w-4 xs:w-6 h-4 xs:h-6" />,
  ],
  [
    'react',
    <FaReact key="react" className="w-4 xs:w-6 h-4 xs:h-6 text-cyan-500" />,
  ],
  [
    'typescript',
    <SiTypescript
      key="typescript"
      className="w-4 xs:w-6 h-4 xs:h-6 text-blue-600"
    />,
  ],
  [
    'mongodb',
    <SiMongodb
      key="mongodb"
      className="w-4 xs:w-6 h-4 xs:h-6 text-green-700"
    />,
  ],
  [
    'jest',
    <SiJest key="jest" className="w-4 xs:w-6 h-4 xs:h-6 text-red-700" />,
  ],
  [
    'firebase',
    <SiFirebase
      key="firebase"
      className="w-4 xs:w-6 h-4 xs:h-6 text-orange-500"
    />,
  ],
  ['next.js', <SiNextdotjs key="nextjs" className="w-4 xs:w-6 h-4 xs:h-6" />],
  [
    'heroku',
    <SiHeroku key="heroku" className="w-4 xs:w-6 h-4 xs:h-6 text-purple-800" />,
  ],
  ['vercel', <SiVercel key="vercel" className="w-4 xs:w-6 h-4 xs:h-6" />],
]);

export interface ProjectCardProps {
  title: string;
  imgUrl: string;
  hasLiveDemo: boolean;
  hasSourceCode: boolean;
  technologiesUsed: string[];
}

export default function ProjectCard({
  title,
  hasLiveDemo,
  hasSourceCode,
  technologiesUsed,
}: ProjectCardProps): JSX.Element {
  return (
    <div className="flex flex-col basis-1/2 w-full md:max-w-[43%] justify-between xs:mr-2 rounded-2xl mb-10">
      <h1 className="m-2 text-xl sm:text-2xl md:text-4xl font-bold dark:text-white">
        {title}
      </h1>

      <div className="pt-5 md:pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
        {technologiesUsed.map((technology: string, i: number) => {
          const icon = technologyMap.get(technology.toLowerCase());

          return (
            <div
              key={`${technology}-${i}`}
              className="flex flex-row items-center m-2"
            >
              {icon}
              <h1 className="pl-1 text-xs xs:text-base dark:text-white">
                {technology}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col xs:flex-row">
        <button
          disabled={!hasLiveDemo}
          className="w-full mr-6 md:mr-0 md:m-2 m-auto mt-8 dark:bg-gradient-to-r dark:from-light-accent dark:to-light-secondary bg-black pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300"
        >
          <FaPlay className="animate-ping" size={10} color="#fff" />
          <h1 className="text-white md:text-sm lg:text-base  font-semibold pl-2">
            Live Demo
          </h1>
        </button>
        <button
          disabled={!hasSourceCode}
          className="w-full md:m-2 m-auto mt-4 xs:mt-8 dark:bg-gradient-to-r dark:from-light-accent dark:to-light-secondary bg-black pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300"
        >
          <CodeIcon className="w-6 h-6" color="#fff" />
          <h1 className="text-white md:text-sm lg:text-base font-semibold pl-2">
            Source Code
          </h1>
        </button>
      </div>
    </div>
  );
}
