import TechnologyCard from 'components/TechnologyCard';
import React from 'react';
import { technologiesData } from './technologiesData';

export default function Technologies() {
  return (
    <div className="mx-auto max-w-[1240px] mb-10">
      <h1 className="py-5 px-5 sm:px-10 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        Technologies
      </h1>
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
