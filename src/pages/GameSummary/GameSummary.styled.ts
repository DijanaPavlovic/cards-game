import styled from 'styled-components';
import { device } from 'breakpoints';

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 6px;
  background-color: var(--white);
  box-shadow: var(--shadow-card);
  padding: var(--spacing-m) var(--spacing-xxs) var(--spacing-s);
  width: calc(100% - 2 * var(--spacing-xs));

  @media ${device.tablet} {
    width: 440px;
  }
`;

export const Title = styled.p`
  margin-bottom: var(--spacing-s);
  margin-top: 0;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  padding: 0 var(--spacing-s);
  text-align: center;
  margin: 0;
  font-weight: 500;
`;

export const GameStats = styled.div`
  display: flex;
  font-size: 0.9rem;
  flex-direction: column;
  width: 75%;
  margin: var(--spacing-m);
`;

interface RowProps {
  isPlayerRow: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  font-weight: ${({ isPlayerRow }) => isPlayerRow && '600'};
`;

export const StatField = styled.div`
  padding: var(--spacing-tiny) var(--spacing-s);
  flex: 1 1 auto;
  white-space: nowrap;

  :last-child {
    text-align: end;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & :first-child {
    margin-right: 2rem;
  }
`;
