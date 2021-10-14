import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddEditAdvice from './AddEditAdvice';

// test name input on AddEditAdvice component

describe('input value', () => {
  it('updates on change', () => {
    const { queryByPlaceholderText } = render(<AddEditAdvice />);

    const nameInput = queryByPlaceholderText('Your name..');

    fireEvent.change(nameInput, { target: { value: 'Alina' } });

    expect(nameInput.value).toBe('Alina');
  });
});
