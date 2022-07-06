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
      onHover: {
        enable: true,
        mode: 'connect',
      },
      onClick: {
        enable: true,
        mode: 'push',
      },
      resize: true,
    },
  },
  particles: {
    color: {
      value: ['#F5B808', '#893168'],
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
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 2.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 150,
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
