import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { baseTheme } from 'src/assets/theme';

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  return <StyledThemeProvider theme={baseTheme}>{children}</StyledThemeProvider>;
};
