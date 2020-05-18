import React from 'react';
import { render } from '@testing-library/react';
import App from '../component/App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
