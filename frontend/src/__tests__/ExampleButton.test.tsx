import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../ExampleButton';

test('renders the button with the correct label', () => {
  render(<Button label="Click Me" />);
  
  // Check if the button is rendered with the correct label
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});
