// Based on these guidelines:
// https://material.io/guidelines/motion/duration-easing.html#
export const animationDuration = '0.35s';

export const animationDelay = `calc(${animationDuration} / 5)`;

export const animationCurve = {
  easeInOut: 'cubic-bezier(.4, 0, .2, 1)',
  easeOut: 'cubic-bezier(0, 0, .2, 1)',
  easeIn: 'cubic-bezier(.4, 0, 1, 1)',
  sharp: 'cubic-bezier(.4, 0, .6, 1)',
};
