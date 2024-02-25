import { createContext } from 'react';

import { ThemeProvider as ScThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '.';

type Props = {
  theme?: {
    mode: 'light' | 'dark';
    /**
     * Some theme variables can be modified through the token attribute in theme.
     */
    token?: Record<string, any>;
  };
  children?: React.ReactNode;
};

export const ThemeContext = createContext<Record<string, string>>({});

export const ThemeProvider: React.FC<Props> = ({ theme, children }: Props) => {
  const mode = theme?.mode || 'light';

  const defaultThemeToken =
    mode === 'dark' ? darkTheme.styledConstants : lightTheme.styledConstants;

  const themeToken = theme?.token ? { ...defaultThemeToken, ...theme.token } : defaultThemeToken;

  return (
    <ScThemeProvider theme={themeToken}>
      <ThemeContext.Provider value={themeToken}>{children}</ThemeContext.Provider>
    </ScThemeProvider>
  );
};
