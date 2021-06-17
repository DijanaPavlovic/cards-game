import * as ACTION_TYPES from 'store/actionTypes';
import { GAME_STATUS, CARDS_PER_PLAYER, NON_NUMBER_CARDS } from 'globalConstants';
import { sortPlayers } from 'utils/utils';
import { Card } from 'api/apiTypes';

export interface State {
  playerName: string;
  numberOfPlayers: number;
  deckId: string | null;
  gameStatus: string;
  round: number;
  isRoundCompleted: boolean;
  players: string[];
  cardsInHand: { [key: string]: Card[] };
  playedCard: { [key: string]: Card | null };
  score: { [key: string]: number };
  isLoading: boolean;
  error: string | null;
}

export const INITIAL_STATE: State = {
  playerName: '',
  numberOfPlayers: 4,
  deckId: null,
  gameStatus: GAME_STATUS.START,
  round: 1,
  isRoundCompleted: false,
  players: [],
  cardsInHand: {},
  playedCard: {},
  score: {},
  isLoading: true,
  error: null,
};

interface RoundStats {
  maxValue: number;
  roundWinner: string | null;
  totalPoints: number;
}

export const rootReducer = (state = INITIAL_STATE, action: ACTION_TYPES.GameAction): State => {
  switch (action.type) {
    case ACTION_TYPES.GAME_STARTED: {
      const { playerName, robots } = action;

      return {
        ...state,
        gameStatus: GAME_STATUS.ACTIVE,
        numberOfPlayers: +robots + 1,
        playerName,
      };
    }

    case ACTION_TYPES.GAME_RESET:
      return { ...state, gameStatus: GAME_STATUS.START };

    case ACTION_TYPES.NEW_DECK_SUCCESS:
      return { ...state, deckId: action.deckId };

    case ACTION_TYPES.PLAYER_PILE_SUCCESS: {
      const { playerName, cards } = action;
      const players = [...state.players, playerName];
      const cardsInHand = { ...state.cardsInHand, [playerName]: cards };
      const playedCard = { ...state.playedCard, [playerName]: null };
      const score = { ...state.score, [playerName]: 0 };
      let { isLoading } = state;

      if (players.length === state.numberOfPlayers) {
        sortPlayers(players);
        isLoading = false;
      }
      return {
        ...state,
        players,
        cardsInHand,
        playedCard,
        score,
        isLoading,
      };
    }

    case ACTION_TYPES.CARD_DRAW_SUCCESS: {
      const { playerName, cardCode } = action;

      const justPlayedCard = state.cardsInHand[playerName].find(({ code }) => code === cardCode);

      let isRoundCompleted = false;

      const playedCard = { ...state.playedCard, [playerName]: justPlayedCard || null };
      const cardsPlayed = Object.values(playedCard).filter(Boolean);

      if (cardsPlayed.length === state.players.length) {
        isRoundCompleted = true;
      }

      return { ...state, playedCard, isRoundCompleted };
    }

    case ACTION_TYPES.ROUND_END_SUCCESS: {
      const roundStats = state.players.reduce(
        (acc: RoundStats, playerName) => {
          const value = state.playedCard[playerName]?.value;
          // @ts-ignore
          const cardPoints = value ? NON_NUMBER_CARDS[value] || +value : 0;

          // Round is won by the highest value, or if there are
          // two or more same values, then the last player wins
          if (cardPoints >= acc.maxValue) {
            acc.maxValue = cardPoints;
            acc.roundWinner = playerName;
          }

          acc.totalPoints += cardPoints;

          return acc;
        },
        { maxValue: 0, roundWinner: '', totalPoints: 0 },
      );

      const score = {
        ...state.score,
        ...(roundStats.roundWinner && {
          [roundStats.roundWinner]: state.score[roundStats.roundWinner] + roundStats.totalPoints,
        }),
      };

      // Remove played cards from hand and reset currently played cards
      const cardsInHand = { ...state.cardsInHand };

      const players = [...state.players];
      const playedCard = { ...state.playedCard };

      players.forEach((playerName) => {
        cardsInHand[playerName] = cardsInHand[playerName].filter(
          ({ code }) => code !== state.playedCard[playerName]?.code,
        );

        playedCard[playerName] = null;
      });

      let { gameStatus, round } = state;

      // Check for game end
      if (state.round === CARDS_PER_PLAYER) {
        gameStatus = GAME_STATUS.END;
      } else {
        round += 1;
      }

      return { ...state, cardsInHand, score, players, playedCard, gameStatus, round };
    }

    default:
      return state;
  }
};
