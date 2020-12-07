import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders contents', () => {
  render(<App />);
  const label = screen.getByText(/Cody Simmons/i);
  expect(label).toBeInTheDocument();
  const lecturer = screen.getByText(/Lecturer/i);
  expect(lecturer).toBeInTheDocument();
  const img = screen.getByAltText(/avatar/i);
  expect(img).toBeInTheDocument();
});
