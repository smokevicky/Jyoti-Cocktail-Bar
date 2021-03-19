import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Unfortunately, I don't have any testing experience.
// I know the Assignment description says to have a testbed ready
// But I don't want to copy a code from internet that I don't understand
// I am keen on learning it, if given a chance but I don't have any experience as of now, unfortunately