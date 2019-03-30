
import * as React from 'react';

export default function Game(): JSX.Element {
  return (
    <React.Fragment>
      Hello World
      {' '}
      {new Date(__BUILD_INFO__.buildTime).toDateString()}
      {' '}
      {__BUILD_INFO__.commitHash.slice(0, 9)}
    </React.Fragment>
  );
}
