import ParticlesContainer from 'components/Particles';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative flex mt-20 mx-auto max-w-[1240px] min-h-[60vh] text-light-primary">
      <ParticlesContainer />
      <div className="absolute top-0 left-0 z-1">Meow</div>
    </div>
  );
}
