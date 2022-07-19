import React from 'react';
import { BiCode, BiSupport, BiWrench } from 'react-icons/bi';

const timelineIconsMap = new Map<string, React.ReactNode>([
  ['support', <BiSupport key="support" />],
  ['technical', <BiWrench key="technical" />],
  ['development', <BiCode key="development" />],
]);
