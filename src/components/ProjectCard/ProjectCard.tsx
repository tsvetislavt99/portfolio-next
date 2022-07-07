import React from 'react';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FaPlay } from 'react-icons/fa';
import { CodeIcon } from '@heroicons/react/solid';

export interface ProjectCardProps {
  title: string;
  imgUrl: string;
  hasLiveDemo: boolean;
  hasSourceCode: boolean;
  technologiesUsed: {
    name: string;
    iconName: string;
  };
}

export default function ProjectCard() {
  return (
    <div className="md:w-[75rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] mx-auto p-4 flex flex-col ease-linear duration-300 md:flex-row-reverse">
      <div className="h-full w-full rounded-2xl basis-2/3 relative">
        <div className="h-full w-full ml-5 relative border-2 border-white rounded-2xl">
          <Image
            src="/project-images/reactiveBlog.png"
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className=" rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full mr-2 rounded-2xl ">
        <h1 className="m-2 text-4xl font-bold dark:text-white">
          [Reactive Blog]: Full-stack blog application
        </h1>

        <div className="pt-5 md:pt-16 pr-2 pl-2 flex flex-row justify-around flex-wrap">
          <div className="flex flex-row items-center m-2">
            <FaReact size={20} color="#61DBFB" />
            <h1 className="pl-1 dark:text-white">React</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiJavascript size={20} color="#007acc" />
            <h1 className="pl-1 dark:text-white">JavaScript</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiNodedotjs size={20} className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">Node.js</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiExpress size={20} className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">Express</h1>
          </div>
          <div className="flex flex-row items-center m-2">
            <SiJsonwebtokens size={20} className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">JWT Authentication</h1>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <button className="w-full md:m-2 m-auto mt-8 bg-dark-accent dark:bg-light-accent pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300">
            <FaPlay className="animate-ping" size={10} color="#fff" />
            <h1 className="text-white text-md font-semibold pl-2">Live Demo</h1>
          </button>
          <button className="w-full md:m-2 m-auto mt-8 bg-dark-accent dark:bg-light-accent pt-2 pb-2 pl-6 pr-4 rounded-full flex flex-row justify-center items-center hover:scale-105 ease-linear duration-300">
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
