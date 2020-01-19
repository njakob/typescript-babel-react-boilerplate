
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {};

export default function Root(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
