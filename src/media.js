// @flow

import { css } from 'styled-components';

const sizes = {
  xxs: 400,
  xs: 600,
  sm: 840,
  md: 960,
  lgTablet: 1024,
  lg: 1280,
  xl: 1440,
  xxl: 1920,
};

export const mediaMax = Object.keys(sizes).reduce((accumulator, key) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units
  const emSize = sizes[key] / 16;
  accumulator[key] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
// @todo: Possible to wrap this and above as single func and still pass args down?
export const mediaMin = Object.keys(sizes).reduce((accumulator, key) => {
  // same reason as about for calculating with em
  const emSize = sizes[key] / 16;
  accumulator[key] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
