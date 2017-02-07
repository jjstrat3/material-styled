// Borrowing/copying Material-ui/next implementation somewhat
/* eslint-disable max-len */

// @flow

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmientShadowOpacity = 0.12;

export function createShadow(...px: Array<number>): string[] {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0, 0, 0, ${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0, 0, 0, ${shadowAmientShadowOpacity})`,
  ];
}

const shadows = {
  '2p': createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
  '3p': createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
  '4p': createShadow(0, 1, 10, 0, 0, 4, 5, 0, 0, 2, 4, -1),
  '6p': createShadow(0, 1, 18, 0, 0, 6, 10, 0, 0, 3, 5, -1),
  '8p': createShadow(0, 3, 14, 2, 0, 8, 10, 1, 0, 5, 5, -3),
};

export default shadows;
