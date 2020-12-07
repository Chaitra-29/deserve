import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';


test('renders text', () => {
  render(<Dashboard />);
  const headline = screen.getByText(/Dashboard/i);
  expect(headline).toBeInTheDocument();
  const subheadline = screen.getByText(/Mobile Ux\/UI Design course/i);
  expect(subheadline).toBeInTheDocument();
});
