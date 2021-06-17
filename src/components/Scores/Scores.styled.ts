import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 4rem;
  box-shadow: var(--shadow-card);
  padding-left: var(--spacing-xxs);
  justify-content: space-between;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  margin-right: var(--spacing-xxs);
`;

export const Name = styled.p`
  display: flex;
  margin-right: var(--spacing-tiny);
  color: var(--primary-light);
`;

export const Score = styled.p`
  color: var(--primary-light);
  font-weight: bold;
`;
