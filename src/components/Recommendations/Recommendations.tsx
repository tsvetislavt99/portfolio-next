import SectionHeading from 'components/SectionHeading';
import React from 'react';
import Recomendation from './Recomendation';
import { recommendations } from './recommendationsData';

export default function Recommendations() {
  return (
    <div id="projects" className="mx-auto max-w-[1240px]">
      <SectionHeading>Recomendations</SectionHeading>
      <div className="mx-6 sm:mx-12 grid gap-8 sm:gap-16 lg:grid-cols-2">
        {recommendations.map((recommendation) => (
          <Recomendation key={recommendation.id} {...recommendation} />
        ))}
      </div>
    </div>
  );
}
