import { render, screen } from '@testing-library/react';
import Home from '../src/components/home-page';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('main-heading');

    expect(heading).toBeInTheDocument();
  });
});
