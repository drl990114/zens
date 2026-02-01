import { createContext } from 'react';

import antdTheme from 'antd/es/theme';
import { ThemeProvider as ScThemeProvider, StyleSheetManager } from 'styled-components';
import { darkTheme, lightTheme } from '.';

import { XProvider, XProviderProps } from '@ant-design/x';
import isPropValid from '@emotion/is-prop-valid';

type Props = {
  theme?: {
    mode: 'light' | 'dark';
    /**
     * Some theme variables can be modified through the token attribute in theme.
     */
    token?: Record<string, any>;
  };
  children?: React.ReactNode;
  antdThemeConfig?: XProviderProps['theme'];
};

export const ThemeContext = createContext<Record<string, string>>({});

export const ThemeProvider: React.FC<Props> = ({ theme, children, antdThemeConfig = {} }: Props) => {
  const mode = theme?.mode || 'light';

  const defaultThemeToken =
    mode === 'dark' ? darkTheme.styledConstants : lightTheme.styledConstants;

  const themeToken = theme?.token ? { ...defaultThemeToken, ...theme.token } : defaultThemeToken;

  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ScThemeProvider theme={themeToken}>
        <XProvider
          theme={{
            token: {
              colorPrimary: themeToken.accentColor,
            },
            algorithm: mode === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
            zeroRuntime: true,
            ...antdThemeConfig
          }}
        >
          <ThemeContext.Provider value={themeToken}>{children}</ThemeContext.Provider>
        </XProvider>
      </ScThemeProvider>
    </StyleSheetManager>
  );
};

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName: string, target: any) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}
