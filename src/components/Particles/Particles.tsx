import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { options } from './particleOptions';

export default function ParticlesContainer(): JSX.Element {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className=" p-0 m-0 top-0 bottom-0 left-0 right-0 z-0 rounded-lg">
      <Particles
        style={{ borderRadius: '20px', position: 'absolute', padding: '0px' }}
        id="tsparticles"
        init={particlesInit}
        options={options}
      />
    </div>
  );
}
