import React from 'react';
import Recomendation from './Recomendation';
import { recommendations } from './recommendationsData';

export default function Recommendations() {
  return (
    <div id="projects" className="mx-auto max-w-[1240px]">
      <h1 className="py-5 px-5 sm:px-10 text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        Recommendations
      </h1>
      <div className="max-w-[1024px] mx-auto flex flex-col justify-between sm:flex-row">
        {recommendations.map((recommendation) => (
          <Recomendation key={recommendation.id} {...recommendation} />
        ))}
      </div>
    </div>
  );
}
