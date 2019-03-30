
import * as React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import configureStore from './configureStore';
import App from './App';

const store = configureStore({});
const theme = {};

export default function Root(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
}
