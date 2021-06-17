import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '../Input';

const defaultProps = {
  register: {
    name: 'name',
    onChange: jest.fn(),
    onBlur: jest.fn(),
    ref: jest.fn(),
  },
};

describe('<Input />', () => {
  it('should display correct value', () => {
    render(<Input {...defaultProps} />);

    const value = 'John';

    userEvent.type(screen.getByRole('textbox'), value);

    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should have label', () => {
    const label = 'NAME:';

    render(<Input {...defaultProps} label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
