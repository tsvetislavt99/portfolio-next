import TimelineCard from 'components/TimelineCard';
import React from 'react';
import { BiSupport } from 'react-icons/bi';

export default function Timeline() {
  return (
    <ol className="max-w-[1240px] mx-auto px-10 items-center sm:flex">
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
      <TimelineCard />
    </ol>
  );
}
