import { screen } from '@testing-library/react';
import render from 'utils/testing';

import StartGame from '../StartGame';

describe('<StartGame />', () => {
  it('should render start game form', () => {
    render(<StartGame />);

    expect(screen.getByText('NAME:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByText('NUMBER OF RIVALS:')).toBeInTheDocument();
    expect(screen.getByText('START GAME')).toBeInTheDocument();
  });
});
