import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;

      error: string;
      success: string;
      info: string;

      light: string;
      dark: string;

      primaryHover: string;
      primaryActive: string;

      secondary5: string;
      secondary10: string;
      secondary15: string;
      secondary20: string;
      secondary30: string;
      secondary35: string;
      secondary40: string;
      secondary50: string;

      secondaryHover: string;
      secondaryActive: string;

      ratings: {
        f: string;
        g: string;
        spp: string;
        sp: string;
        s: string;
        a: string;
        b: string;
        c: string;
      };

      eidolons: {
        teralyst: string;
        gantulyst: string;
        hydrolyst: string;
      };

      medals: {
        gold: string;
        silver: string;
        bronze: string;
      };
    };
    textColors: {
      base: string;
      faded: string;
      inverted: string;
      primary: string;
      secondary: string;
      accent: string;
      error: string;
      success: string;
      black: string;
      gold: string;
      silver: string;
      bronze: string;
    };
    deviceWidths: {
      mobile: number;
      tablet: number;
      laptop: number;
      desktop: number;
    };
    fontSizes: {
      tiny: string;
      small: string;
      normal: string;
      caption: string;
      subheading: string;
      heading: string;
      title: string;
    };
  }
}
