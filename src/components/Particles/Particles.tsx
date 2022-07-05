import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { optionsLight } from './particleOptions';

export default function ParticlesContainer() {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  return (
    <div className="absolute min-h-[60vh] h-[60vh] p-0 m-0 top-0 bottom-0 left-0 right-0 z-0">
      <Particles
        style={{ height: '60vh' }}
        id="tsparticles"
        init={particlesInit}
        options={optionsLight}
      />
    </div>
  );
}
