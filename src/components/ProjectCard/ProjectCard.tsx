import React from 'react';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiJsonwebtokens,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';
import { FaPlay } from 'react-icons/fa';
import { CodeIcon } from '@heroicons/react/solid';

// TODO: Cleanup

const technologyMap = new Map([
  [
    'javascript',
    <SiJavascript key="javascript" className="w-6 h-6 text-yellow-500" />,
  ],
  ['nodejs', <SiNodedotjs key="nodejs" className="w-6 h-6 text-green-700" />],
  ['express', <SiExpress key="express" className="w-6 h-6" />],
  [
    'jsonwebtokens',
    <SiJsonwebtokens key="jsonwebtokens" className="w-6 h-6" />,
  ],
  ['react', <FaReact key="react" className="w-6 h-6" color="cyan" />],
  [
    'typescript',
    <SiTypescript key="typescript" className="w-6 h-6" color="blue" />,
  ],
  ['mongodb', <SiMongodb key="mongodb" className="w-6 h-6" color="green" />],
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
  imgUrl,
  hasLiveDemo,
  hasSourceCode,
  technologiesUsed,
}: ProjectCardProps): JSX.Element {
  return (
    <div className="md:w-[75rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] mx-auto p-4 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className="h-full w-full rounded-2xl basis-2/3 relative">
        <div className="h-full w-full ml-5 relative border-2 border-white rounded-2xl">
          <Image
            src={imgUrl}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full mr-2 rounded-2xl ">
        <h1 className="m-2 text-4xl font-bold dark:text-white">{title}</h1>

        <div className="pt-5 md:pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          {technologiesUsed.map((technology: string, i: number) => {
            const icon = technologyMap.get(technology.toLowerCase());

            return (
              <div
                key={`${technology}-${i}`}
                className="flex flex-row items-center m-2"
              >
                {icon}
                <h1 className="pl-1 dark:text-white">{technology}</h1>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col md:flex-row">
          <button
            disabled={!hasLiveDemo}
            className="w-full md:m-2 m-auto mt-8 bg-dark-accent dark:bg-light-accent pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300"
          >
            <FaPlay className="animate-ping" size={10} color="#fff" />
            <h1 className="text-white text-md font-semibold pl-2">Live Demo</h1>
          </button>
          <button
            disabled={!hasSourceCode}
            className="w-full md:m-2 m-auto mt-8 bg-dark-accent dark:bg-light-accent pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300"
          >
            <CodeIcon className="w-6 h-6" color="#fff" />
            <h1 className="text-white text-md font-semibold pl-2">
              Source Code
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}
