import styled from 'styled-components';

import { device } from 'breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectBase = styled.select`
  width: 140px;
  padding: var(--spacing-tiny);
  border-radius: var(--border-radius-xs);
  border: none;
  position: relative;
  font-size: 0.9rem;

  @media ${device.tablet} {
    font-size: 1rem;
    width: 160px;
    padding: var(--spacing-xxs) var(--spacing-tiny);
  }
`;
