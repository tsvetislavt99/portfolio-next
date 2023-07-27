import React from 'react';
import Image from 'next/image';
import { BiCode, BiWrench } from 'react-icons/bi';
import Link from 'next/link';

export const timelineIconsMap = new Map<string, React.ReactNode>([
  [
    'mentormate',
    <Link
      key="mentor-mate"
      target="_blank"
      rel="noopener noreferrer"
      href="https://mentormate.com/"
    >
      <Image
        src="/icons/mm.png"
        className="rounded-full"
        alt="Technical"
        width={24}
        height={24}
      />
    </Link>,
  ],
  [
    'draftkings',
    <Link
      key="dk"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.draftkings.com/about/"
    >
      <Image
        src="/icons/dk.png"
        className="rounded-full"
        alt="Technical"
        width={18}
        height={18}
      />
    </Link>,
  ],
]);
