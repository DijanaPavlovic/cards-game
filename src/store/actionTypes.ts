import { Card } from 'api/apiTypes';
import { RobotsValues } from 'globalConstants';

export const GAME_STARTED = 'GAME_STARTED';
export const GAME_RESET = 'GAME_RESET';

export const NEW_DECK_SUCCESS = 'NEW_DECK_SUCCESS';
export const NEW_DECK_FAILURE = 'NEW_DECK_FAILURE';

export const PLAYER_PILE_SUCCESS = 'PLAYER_PILE_SUCCESS';
export const PLAYER_PILE_FAILURE = 'PLAYER_PILE_FAILURE';

export const CARD_DRAW_REQUEST = 'CARD_DRAW_REQUEST';
export const CARD_DRAW_SUCCESS = 'CARD_DRAW_SUCCESS';
export const CARD_DRAW_FAILURE = 'CARD_DRAW_FAILURE';

export const ROUND_END_SUCCESS = 'ROUND_END_SUCCESS';
export const ROUND_END_FAILURE = 'ROUND_END_FAILURE';

export interface StartGamePayload {
  playerName: string;
  robots: RobotsValues;
}

export interface StartGameAction extends StartGamePayload {
  type: typeof GAME_STARTED;
}

export interface ResetGameAction {
  type: typeof GAME_RESET;
}

export interface NewDeckSuccessAction {
  type: typeof NEW_DECK_SUCCESS;
  deckId: string;
}

export interface NewDeckFailureAction {
  type: typeof NEW_DECK_FAILURE;
  error: string;
}

export interface PlayerPilePayload {
  playerName: string;
  cards: Card[];
}

export interface PlayerPileSuccessAction extends PlayerPilePayload {
  type: typeof PLAYER_PILE_SUCCESS;
}

export interface PlayerPileFailureAction {
  type: typeof PLAYER_PILE_FAILURE;
  error: string;
}

export interface DrawCardRequestAction {
  type: typeof CARD_DRAW_REQUEST;
  cardCode: string;
}

export interface DrawCardSuccessPayload {
  playerName: string;
  cardCode: string;
}

export interface DrawCardSuccessAction extends DrawCardSuccessPayload {
  type: typeof CARD_DRAW_SUCCESS;
}

export interface DrawCardFailureAction {
  type: typeof CARD_DRAW_FAILURE;
  error: string;
}

export interface RoundEndSuccessAction {
  type: typeof ROUND_END_SUCCESS;
}

export interface RoundEndFailureAction {
  type: typeof ROUND_END_FAILURE;
  error: string;
}

export type GameAction =
  | StartGameAction
  | ResetGameAction
  | NewDeckSuccessAction
  | NewDeckFailureAction
  | PlayerPileSuccessAction
  | PlayerPileFailureAction
  | DrawCardRequestAction
  | DrawCardSuccessAction
  | DrawCardFailureAction
  | RoundEndSuccessAction
  | RoundEndFailureAction;
