import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

const defaultButtonText = 'Button Text';
const defaultProps = { children: defaultButtonText };
const mockHandleClick = jest.fn();

describe('<Button />', () => {
  it('should render button with text and it should not be disabled', () => {
    render(<Button onClick={mockHandleClick} {...defaultProps} />);

    const button = screen.getByText(defaultButtonText);

    expect(button).not.toBeDisabled();
    expect(button).toBeInTheDocument();
  });

  it('should call click handler on click', () => {
    render(<Button onClick={mockHandleClick} {...defaultProps} />);

    expect(mockHandleClick).not.toHaveBeenCalled();

    userEvent.click(screen.getByText(defaultButtonText));

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(<Button onClick={mockHandleClick} {...defaultProps} isDisabled />);

    expect(screen.getByText(defaultButtonText)).toBeDisabled();
  });
});
