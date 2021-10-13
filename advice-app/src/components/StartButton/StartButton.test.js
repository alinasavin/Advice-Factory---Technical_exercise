import React from 'react';
import { render, screen } from '@testing-library/react';
import StartButton from './StartButton';

it('renders correctly', () => {
  const { queryByTestId } = render(<StartButton />);

  expect(queryByTestId('start-now')).toBeTruthy();
});
