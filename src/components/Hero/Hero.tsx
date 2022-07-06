import ParticlesContainer from 'components/Particles';
import React from 'react';

export default function Hero(): JSX.Element {
  return (
    <div className="relative flex mt-20 mx-auto max-w-[1240px] min-h-[60vh] text-light-primary">
      <ParticlesContainer />
      <div className="absolute top-0 left-0 z-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        inventore nulla magni a nemo quae odit natus similique culpa itaque
        doloribus, dolores repellendus eligendi deserunt enim. Deleniti
        architecto sunt nostrum. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti sequi eos ipsam, perspiciatis omnis
        architecto atque, deleniti soluta, repellat ducimus nemo pariatur
        voluptate suscipit! Error beatae veritatis excepturi esse odit. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quod magni voluptatem
        repudiandae? Odio velit nobis eius nihil molestias quas voluptatum
        cupiditate temporibus tempora, omnis corporis enim minima! Soluta, est
        totam.
      </div>
    </div>
  );
}
