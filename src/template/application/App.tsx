import * as React from 'react';

export function App() {
  return (
    <>
      Hello World
      {' '}
      {new Date(__BUILD_INFO__.buildTime).toDateString()}
      {' '}
      {__BUILD_INFO__.commitHash.slice(0, 9)}
    </>
  );
}
