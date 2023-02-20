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

  it('renders first input', () => {
    render(<HomePage />);

    const input = screen.getByTestId('departure-input');

    expect(input).toBeInTheDocument();
  });

  it('renders second input', () => {
    render(<HomePage />);

    const input = screen.getByTestId('destination-input');

    expect(input).toBeInTheDocument();
  });

  it('renders button', () => {
    render(<HomePage />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('renders button of type submit', () => {
    render(<HomePage />);

    const button = screen.getByRole('button');

    expect(button).toHaveProperty('type', 'submit');
  });
});
