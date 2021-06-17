import { createSelector } from 'reselect';

import { Card } from 'api/apiTypes';
import { State } from './reducer';

const baseSelector = (state: State): State => state;

export const getLoadingStatus = createSelector(baseSelector, (state) => state.isLoading);

export const getPlayerName = createSelector(baseSelector, (state) => state.playerName);

export const getPlayerNames = createSelector(baseSelector, (state) => state.players);

export const getDeckId = createSelector(baseSelector, (state) => state.deckId);

export const getGameStatus = createSelector(baseSelector, (state) => state.gameStatus);

export const getPlayedCards = createSelector(baseSelector, (state) => state.playedCard);

export const getScores = createSelector(baseSelector, (state) => state.score);

export const getRoundCompleted = createSelector(baseSelector, (state) => state.isRoundCompleted);

interface PlayerDecks {
  [key: string]: {
    cardsInHand: Card[];
    playedCard: Card | null;
  };
}

export const getPlayerDecks = createSelector(baseSelector, (state) =>
  state.players.reduce(
    (acc: PlayerDecks, playerName) => ({
      ...acc,
      [playerName]: {
        cardsInHand: state.cardsInHand[playerName],
        playedCard: state.playedCard[playerName],
      },
    }),
    {},
  ),
);
