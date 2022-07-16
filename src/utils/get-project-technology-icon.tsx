import React from 'react';
import { FaReact } from 'react-icons/fa';
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

export const technologyMap = new Map([
  [
    'javascript',
    <SiJavascript
      key="javascript"
      className="w-4 xs:w-6 h-4 xs:h-6"
      color="#F0DB4F"
    />,
  ],
  [
    'nodejs',
    <SiNodedotjs
      key="nodejs"
      className="w-4 xs:w-6 h-4 xs:h-6"
      color="#3c873a"
    />,
  ],
  ['express', <SiExpress key="express" className="w-4 xs:w-6 h-4 xs:h-6" />],
  [
    'jsonwebtokens',
    <SiJsonwebtokens key="jsonwebtokens" className="w-4 xs:w-6 h-4 xs:h-6" />,
  ],
  [
    'react',
    <FaReact key="react" className="w-4 xs:w-6 h-4 xs:h-6" color="#61DBFB" />,
  ],
  [
    'typescript',
    <SiTypescript
      key="typescript"
      className="w-4 xs:w-6 h-4 xs:h-6"
      color="#007acc"
    />,
  ],
  [
    'mongodb',
    <SiMongodb
      key="mongodb"
      className="w-4 xs:w-6 h-4 xs:h-6 "
      color="#0cd45b"
    />,
  ],
  [
    'jest',
    <SiJest key="jest" className="w-4 xs:w-6 h-4 xs:h-6 " color="#C63D14" />,
  ],
  [
    'firebase',
    <SiFirebase
      key="firebase"
      className="w-4 xs:w-6 h-4 xs:h-6 "
      color="#FFCB2B"
    />,
  ],
  ['next.js', <SiNextdotjs key="nextjs" className="w-4 xs:w-6 h-4 xs:h-6" />],
  [
    'heroku',
    <SiHeroku
      key="heroku"
      className="w-4 xs:w-6 h-4 xs:h-6 "
      color="#6762A6"
    />,
  ],
  ['vercel', <SiVercel key="vercel" className="w-4 xs:w-6 h-4 xs:h-6" />],
]);

export {};
