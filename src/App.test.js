import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('App renders', () => {
  const result = render(<App />);
  const className = result.container.firstChild.className;
  expect(className).toBe('App');
});
