import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('Hello World text renders to the page', () => {
  render(<HelloWorld />);

  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
