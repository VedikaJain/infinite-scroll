import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Login } from './Login';

test('renders login page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
