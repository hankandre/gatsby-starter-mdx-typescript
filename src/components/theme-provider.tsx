import * as React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import theme from '../utils/theme';

type Props = {
  children?: React.ReactNode;
  element?: React.ReactNode;
};

export default function ThemeProvider({ children, element }: Props) {
  return (
    <EmotionThemeProvider theme={theme}>
      {children ?? element}
    </EmotionThemeProvider>
  );
}
