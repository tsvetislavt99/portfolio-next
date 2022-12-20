import SectionHeading from 'components/SectionHeading';
import TimelineCard from 'components/TimelineCard';
import React from 'react';
import { timelineData } from './timelineData';

export default function Timeline() {
  return (
    <section className="mx-auto max-w-[1240px]">
      <SectionHeading>Timeline</SectionHeading>
      <ol className="max-w-[1240px] mx-auto px-6 sm:px-12 items-start lg:flex mb-10">
        {timelineData.map((timeline) => (
          <TimelineCard key={timeline.title} {...timeline} />
        ))}
      </ol>
    </section>
  );
}
