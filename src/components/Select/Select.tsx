import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Label } from 'components';
import { Container, SelectBase } from './Select.styled';

interface SelectProps {
  register: UseFormRegisterReturn;
  options: { label: string; value: string }[];
  label?: string;
  className?: string;
}

const Select = ({ register, options, label, className }: SelectProps): React.ReactElement => (
  <Container className={className}>
    {label && <Label>{label}</Label>}
    <SelectBase {...register}>
      {options.map((option) => (
        <option value={option.value} key={option.label}>
          {option.label}
        </option>
      ))}
    </SelectBase>
  </Container>
);

export default Select;
