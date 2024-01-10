import { DefaultTheme } from 'styled-components';

export const deviceWidths: DefaultTheme['deviceWidths'] = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1400,
};

export const fontSizes: DefaultTheme['fontSizes'] = {
  tiny: '8px',
  small: '12px',
  normal: '16px',
  caption: '20px',
  subheading: '24px',
  heading: '28px',
  title: '32px',
};

export const baseTheme: DefaultTheme = {
  colors: {
    primary: 'hsl(242.5 72.7% 55.5%)',
    secondary: 'hsl(62.5 72.7% 55.5%)',
    accent: 'hsl(0 0% 100%)',

    error: 'hsl(4, 70%, 58%)',
    success: 'hsl(122, 30%, 49%)',
    info: 'hsl(199, 76%, 48%)',

    light: '#d3d3d3',
    dark: '#000',

    primaryHover: 'hsla(242.5, 72.7%, 55.5%, 0.8)',
    primaryActive: 'hsla(242.5, 72.7%, 55.5%, 0.25)',

    secondary5: 'hsl(62.5 72.7% 5%)',
    secondary10: 'hsl(62.5 72.7% 10%)',
    secondary15: 'hsl(62.5 72.7% 15%)',
    secondary20: 'hsl(62.5 72.7% 20%)',
    secondary30: 'hsl(62.5 72.7% 30%)',
    secondary35: 'hsl(62.5 72.7% 35%)',
    secondary40: 'hsl(62.5 72.7% 40%)',
    secondary50: 'hsl(62.5 72.7% 50%)',

    secondaryHover: 'hsla(234, 20%, 35%, 0.15)',
    secondaryActive: 'hsla(234, 20%, 35%, 0.25)',

    ratings: {
      g: 'hsl(291 80% 75%)',
      spp: 'hsl(262 80% 77%)',
      sp: 'hsl(186 60% 50%)',
      s: 'hsl(165 50% 51%)',
      a: 'hsl(93 50% 51%)',
      b: 'hsl(55 60% 50%)',
      c: 'hsl(34 60% 50%)',
      f: 'hsl(21 60% 45%)',
    },

    eidolons: {
      teralyst: 'hsl(194 61% 15%)',
      gantulyst: 'hsl(54 30% 20%)',
      hydrolyst: 'hsl(144 24% 17%)',
    },

    medals: {
      gold: 'hsl(41, 33%, 18%)',
      silver: 'hsl(233, 8%, 21%)',
      bronze: 'hsl(8, 20%, 15%)',
    },
  },
  textColors: {
    base: '#000',
    faded: '#999',
    inverted: '#000',
    primary: 'hsl(242.5 72.7% 55.5%)',
    secondary: 'hsl(62.5 72.7% 55.5%)',
    accent: 'hsl(0 0% 100%)',
    error: '#F44336',
    success: '#4CAF50',
    black: '#000',
    gold: '#DAA520',
    silver: '#aaa9ad',
    bronze: '#9c5221',
  },
  deviceWidths,
  fontSizes,
};

export type Color = keyof DefaultTheme['colors'];
export type TextColor = keyof DefaultTheme['textColors'];
export type FontSize = keyof DefaultTheme['fontSizes'];
