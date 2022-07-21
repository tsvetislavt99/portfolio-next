import TimelineCard from 'components/TimelineCard';
import React from 'react';
import { timelineData } from './timelineData';

export default function Timeline() {
  return (
    <section className="mx-auto max-w-[1240px]">
      <h1 className="py-5 px-5 sm:px-10 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        Timeline
      </h1>
      <ol className="max-w-[1240px] mx-auto px-10 items-start sm:flex mb-10">
        {timelineData.map((timeline) => (
          <TimelineCard key={timeline.title} {...timeline} />
        ))}
      </ol>
    </section>
  );
}
