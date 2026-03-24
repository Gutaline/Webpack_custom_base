import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from "shared/ui/Button/Button";

test('button renders with correct text', () => {
  render(<Button>22</Button>);
  
  const buttonElement = screen.getByRole('button', { name: /22/i });
  expect(buttonElement).toBeInTheDocument();
});