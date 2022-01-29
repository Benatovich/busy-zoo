import { render, screen } from '@testing-library/react';
import App from './App';

test('hedgehog', () => {
  render(<App />);
  const linkElement = screen.getByText(/hedgehog/i);
  expect(linkElement).toBeInTheDocument();
});
