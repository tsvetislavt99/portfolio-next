import type { ISourceOptions } from 'tsparticles-engine';

export const options: ISourceOptions = {
  background: {
    color: 'transparent',
  },
  fullScreen: {
    enable: false,
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'attract',
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: ['#6AB341', '#FB8E1C', '#fdbd7a', '#284318', '#3a6123'],
    },
    links: {
      color: 'random',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    number: {
      value: 50,
    },
    move: {
      direction: 'none',
      enable: true,
      random: false,
      speed: 1,
      straight: false,
      bounce: false,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const mobileOptions = {
  ...options,
  particles: {
    ...options.particles,
    number: {
      value: 25,
    },
  },
};
