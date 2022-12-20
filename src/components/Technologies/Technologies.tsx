import SectionHeading from 'components/SectionHeading';
import TechnologyCard from 'components/TechnologyCard';
import React from 'react';
import { technologiesData } from './technologiesData';

export default function Technologies() {
  return (
    <div id="technology" className="mx-auto max-w-[1240px] mb-10">
      <SectionHeading>Technologies</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-5 sm:px-10">
        {technologiesData.map(
          (technology: { title: string; description: string }) => (
            <TechnologyCard
              key={technology.title}
              title={technology.title}
              description={technology.description}
            />
          ),
        )}
      </div>
    </div>
  );
}
