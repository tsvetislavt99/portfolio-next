import TimelineCard from 'components/TimelineCard';
import React from 'react';
import { timelineData } from './timelineData';

export default function Timeline() {
  return (
    <section>
      <ol className="max-w-[1240px] mx-auto px-10 items-center sm:flex">
        {timelineData.map((timeline) => (
          <TimelineCard key={timeline.title} {...timeline} />
        ))}
      </ol>
    </section>
  );
}
