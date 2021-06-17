import styled from 'styled-components';

import { device } from 'breakpoints';

import {
  MOBILE_CARD_WIDTH,
  MOBILE_CARD_HEIGHT,
  CARD_WIDTH,
  CARD_HEIGHT,
  CARD_OFFSET,
  CARDS_PER_PLAYER,
  TABLE_OVERLAP_DISTANCE,
  TABLE_OVERLAP_TWIST,
  ROBOT_NAMES,
} from 'globalConstants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

interface CardsProps {
  hasCardsOnTheTable: boolean;
}

export const Cards = styled.div<CardsProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: var(--spacing-xs);

  @media ${device.tablet} {
    margin: var(--spacing-s) var(--spacing-l);
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${({ hasCardsOnTheTable }) => (hasCardsOnTheTable ? CARD_HEIGHT : CARD_OFFSET)}px;
  }
`;

interface CardProps {
  index: number;
  name: string;
  image: string;
  isHumanPlayer: boolean;
  isPlayedCard: boolean;
}

export const Card = styled.div.attrs(
  ({ image, isHumanPlayer }: CardProps) =>
    isHumanPlayer && {
      as: 'img',
      role: 'img',
      src: image,
      tabIndex: 0,
    },
)`
  position: absolute;
  width: ${MOBILE_CARD_WIDTH}px;
  height: ${MOBILE_CARD_HEIGHT}px;
  border-radius: 6px;
  object-fit: cover;
  transition: all 0.3s ease-in-out, filter 0.1s linear;

  @media ${device.tablet} {
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;
  }

  ${({ isHumanPlayer, isPlayedCard }: CardProps) =>
    isHumanPlayer && !isPlayedCard
      ? `
        cursor: pointer;

        :focus,
        :hover {
          filter: brightness(0.75);
          transform: translate(0, -${CARD_OFFSET}px);
        }
      `
      : `
        border: 1px solid #333;
        background: linear-gradient(310deg, #1d2b75 30%, #2f5bb9 70%);
        pointer-events: none;
  `}

  ${({ image, isPlayedCard }) =>
    isPlayedCard &&
    `
      pointer-events: none;
      background-image: url(${image});
      background-size: contain;
      border: none;
  `}

  /* Card positioning*/

  ${({ index, isHumanPlayer, isPlayedCard, name }) => {
    const deckOffset = (index - 0.5 - CARDS_PER_PLAYER / 2) * CARD_OFFSET;

    if (isHumanPlayer) {
      return isPlayedCard
        ? `
          bottom: calc(50% - ${MOBILE_CARD_HEIGHT / TABLE_OVERLAP_DISTANCE}px);
          left: calc(50% - ${MOBILE_CARD_WIDTH / 2 + CARD_OFFSET * TABLE_OVERLAP_TWIST}px);


          @media ${device.tablet} {
            bottom: calc(50% - ${CARD_HEIGHT / TABLE_OVERLAP_DISTANCE}px);
            left: calc(50% - ${CARD_WIDTH / 2 + CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
          }
        `
        : `
          bottom: 0;
          left: calc(${deckOffset}px + 50%);
      `;
    }
    if (name === ROBOT_NAMES.ROBOT_1) {
      return isPlayedCard
        ? `
          z-index: 1;
          top: calc(50% - ${MOBILE_CARD_HEIGHT / 2 + CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
          left: calc(50% - ${MOBILE_CARD_WIDTH / TABLE_OVERLAP_DISTANCE}px);

          @media ${device.tablet} {
            top: calc(50% - ${CARD_HEIGHT / 2 + CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
            left: calc(50% - ${CARD_WIDTH / TABLE_OVERLAP_DISTANCE}px);
          }
        `
        : `
          top: calc(${deckOffset}px + 50%);
          left: 0;
      `;
    }
    if (name === ROBOT_NAMES.ROBOT_2) {
      return isPlayedCard
        ? `
          z-index: 2;
          top: calc(50% - ${MOBILE_CARD_HEIGHT / TABLE_OVERLAP_DISTANCE}px);
          left: calc(50% - ${MOBILE_CARD_WIDTH / 2 - CARD_OFFSET * TABLE_OVERLAP_TWIST}px);

          @media ${device.tablet} {
            top: calc(50% - ${CARD_HEIGHT / TABLE_OVERLAP_DISTANCE}px);
            left: calc(50% - ${CARD_WIDTH / 2 - CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
          }
        `
        : `
          top: 0;
          left: calc(${deckOffset}px + 50%);
      `;
    }
    if (name === ROBOT_NAMES.ROBOT_3) {
      return isPlayedCard
        ? `
          z-index: 3;
          top: calc(50% - ${MOBILE_CARD_HEIGHT / 2 - CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
          right: calc(50% - ${MOBILE_CARD_WIDTH / TABLE_OVERLAP_DISTANCE}px);

          @media ${device.tablet} {
            top: calc(50% - ${CARD_HEIGHT / 2 - CARD_OFFSET * TABLE_OVERLAP_TWIST}px);
          right: calc(50% - ${CARD_WIDTH / TABLE_OVERLAP_DISTANCE}px);
          }
        `
        : `
          top: calc(${deckOffset}px + 50%);
          right: 0;
      `;
    }
    return '';
  }}
`;
