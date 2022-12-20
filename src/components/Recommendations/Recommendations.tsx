import SectionHeading from 'components/SectionHeading';
import React from 'react';
import Recomendation from './Recomendation';
import { recommendations } from './recommendationsData';

export default function Recommendations() {
  return (
    <div id="projects" className="mx-auto max-w-[1240px]">
      <SectionHeading>Recomendations</SectionHeading>
      <div className="max-w-[1024px] xl:max-w-[1140px] mx-auto grid gap-8 sm:gap-16 lg:grid-cols-2">
        {recommendations.map((recommendation) => (
          <Recomendation key={recommendation.id} {...recommendation} />
        ))}
      </div>
    </div>
  );
}
