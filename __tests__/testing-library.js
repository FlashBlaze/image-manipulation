import React from 'react';
import { render } from '@testing-library/react';
import Index from '../pages/index';

test('renders deploy link', () => {
  const { getByText } = render(<Index />);
  const titleText = getByText(/Image manipulator/);
  expect(titleText).toBeInTheDocument();
});
