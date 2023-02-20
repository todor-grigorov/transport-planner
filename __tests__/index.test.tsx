import { render, screen } from '@testing-library/react';
import HomePage from '../src/components/home-page';
import '@testing-library/jest-dom';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByTestId('main-heading');

    expect(heading).toBeInTheDocument();
  });
});
