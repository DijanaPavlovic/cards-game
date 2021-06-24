import styled from 'styled-components';

import { device } from 'breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  padding: var(--spacing-xxs) var(--spacing-xxs);
  border-radius: var(--border-radius-xs);
  transition: all 0.2s ease-in-out;
  border: none;
  font-size: 0.9rem;

  ::placeholder {
    color: ${({ theme }) => theme.primaryDark};
    opacity: 0.4;
  }

  @media ${device.tablet} {
    font-size: 1rem;
    padding: var(--spacing-xs) var(--spacing-xxs);
  }
`;
