import React from 'react';
import { render } from 'react-dom';
import { Root } from './Root';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

render(<Root />, rootElement);
