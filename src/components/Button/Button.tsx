import React, { MouseEvent } from 'react';

import { ButtonBase } from './Button.styled';

export interface ButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
  onClick?(e: MouseEvent<HTMLButtonElement>): void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({
  children,
  isDisabled,
  onClick,
  className,
  type = 'button',
}: ButtonProps): React.ReactElement => (
  <ButtonBase disabled={isDisabled} onClick={onClick} type={type} className={className}>
    {children}
  </ButtonBase>
);

export default Button;
