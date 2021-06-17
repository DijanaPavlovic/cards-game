import {
  GAME_STARTED,
  GAME_RESET,
  NEW_DECK_SUCCESS,
  NEW_DECK_FAILURE,
  PLAYER_PILE_SUCCESS,
  PLAYER_PILE_FAILURE,
  CARD_DRAW_REQUEST,
  CARD_DRAW_SUCCESS,
  CARD_DRAW_FAILURE,
  ROUND_END_SUCCESS,
  ROUND_END_FAILURE,
  StartGamePayload,
  StartGameAction,
  ResetGameAction,
  NewDeckSuccessAction,
  NewDeckFailureAction,
  PlayerPilePayload,
  PlayerPileSuccessAction,
  PlayerPileFailureAction,
  DrawCardRequestAction,
  DrawCardSuccessPayload,
  DrawCardSuccessAction,
  DrawCardFailureAction,
  RoundEndSuccessAction,
  RoundEndFailureAction,
} from 'store/actionTypes';

export const startGame = ({ playerName, robots }: StartGamePayload): StartGameAction => ({
  type: GAME_STARTED,
  playerName,
  robots,
});

export const resetGame = (): ResetGameAction => ({
  type: GAME_RESET,
});

export const newDeckSuccess = (deckId: string): NewDeckSuccessAction => ({
  type: NEW_DECK_SUCCESS,
  deckId,
});

export const newDeckFailure = (error: string): NewDeckFailureAction => ({
  type: NEW_DECK_FAILURE,
  error,
});

export const playerPileSuccess = ({
  playerName,
  cards,
}: PlayerPilePayload): PlayerPileSuccessAction => ({
  type: PLAYER_PILE_SUCCESS,
  playerName,
  cards,
});

export const playerPileFailure = (error: string): PlayerPileFailureAction => ({
  type: PLAYER_PILE_FAILURE,
  error,
});

export const drawCard = (cardCode: string): DrawCardRequestAction => ({
  type: CARD_DRAW_REQUEST,
  cardCode,
});

export const drawCardSuccess = ({
  playerName,
  cardCode,
}: DrawCardSuccessPayload): DrawCardSuccessAction => ({
  type: CARD_DRAW_SUCCESS,
  playerName,
  cardCode,
});

export const drawCardFailure = (error: string): DrawCardFailureAction => ({
  type: CARD_DRAW_FAILURE,
  error,
});

export const roundEndSuccess = (): RoundEndSuccessAction => ({
  type: ROUND_END_SUCCESS,
});

export const roundEndFailure = (error: string): RoundEndFailureAction => ({
  type: ROUND_END_FAILURE,
  error,
});
