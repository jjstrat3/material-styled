import { amber, darkContrast, grey, pink, white } from './colors';

export default {
  baseUnit: '10px',
  color: {
    divider: grey[50],
    background: white,
    text: grey[900],
    textSecondary: grey[600],
    primary: pink[500],
    primaryContrast: darkContrast,
    primaryDark: pink[700],
    accent: amber.a200,
    accentDark: amber.a700,
    accentContrast: darkContrast,
  },
  font: {
    size: `calc(1.6 * ${this.baseUnit})`,
    sizeBig: `calc(1.8 * ${this.baseUnit})`,
    sizeSmall: `calc(1.4 * ${this.baseUnit})`,
    weightThin: 300,
    weightNormal: 400,
    weightSemiBold: 500,
    weightBold: 700,
  },
  zIndex: {
    highest: 400,
    higher: 200,
    high: 100,
    normal: 1,
    low: -100,
    lower: -200,
  },
};
