import axios from 'axios';

import {
  GetNewDeckResponse,
  GetPlayerCardsResponse,
  CreatePlayerPileResponse,
  DrawCardFromPileResponse,
} from './apiTypes';

const baseURL = 'https://deckofcardsapi.com/api/deck';

export const getNewDeck = async (): Promise<GetNewDeckResponse> =>
  axios.get(`${baseURL}/new/shuffle`);

export const getPlayerCards = async (
  deckId: string,
  cardNumber: string,
): Promise<GetPlayerCardsResponse> => axios.get(`${baseURL}/${deckId}/draw/?count=${cardNumber}`);

export const createPlayerPile = async (
  deckId: string,
  pileName: string,
  cards: string,
): Promise<CreatePlayerPileResponse> =>
  axios.get(`${baseURL}/${deckId}/pile/${pileName}/add?cards=${cards}`);

export const drawCardFromPile = async (
  deckId: string,
  pileName: string,
  card: string,
): Promise<DrawCardFromPileResponse> => {
  const queryParams = card ? `cards=${card}` : 'count=1';

  axios.get(`${baseURL}/${deckId}/pile/${pileName}/draw/?${queryParams}`);
};
