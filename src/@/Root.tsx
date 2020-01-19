import React from 'react';
import { ThemeProvider } from 'styled-components';
import { App } from './App';

const theme = {};

export function Root() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
