import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Esta es mi primera aplicación en React, está padrísimo!/i);
  expect(linkElement).toBeInTheDocument();
});
