import styled from 'styled-components';

import { device } from 'breakpoints';

export const ButtonBase = styled.button`
  padding: var(--spacing-xxs) var(--spacing-xs);
  background: var(--primary-dark);
  border: none;
  border-radius: var(--border-radius-s);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 0.8rem;

  :disabled {
    opacity: 0.3;
    cursor: default;
  }

  :focus:not(:disabled),
  :hover:not(:disabled) {
    background: var(--primary);
    box-shadow: var(--shadow-element);
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
  }
`;
