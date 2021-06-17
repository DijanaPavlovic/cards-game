import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Label } from 'components';
import { Container, InputField } from './Input.styled';

interface InputProps {
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
  className?: string;
}

const Input = ({ register, label, placeholder, className }: InputProps): React.ReactElement => (
  <Container className={className}>
    {label && <Label>{label}</Label>}
    <InputField placeholder={placeholder} {...register} />
  </Container>
);

export default Input;
