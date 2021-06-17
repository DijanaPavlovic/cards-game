import {
  GetNewDeckResponse,
  GetPlayerCardsResponse,
  CreatePlayerPileResponse,
  DrawCardFromPileResponse,
} from './apiTypes';

const baseURL = 'https://deckofcardsapi.com/api/deck';

export const getNewDeck = async (): Promise<GetNewDeckResponse> => {
  const response = await fetch(`${baseURL}/new/shuffle`);
  const result = response.json();
  return result;
};

export const getPlayerCards = async (
  deckId: string,
  cardNumber: string,
): Promise<GetPlayerCardsResponse> => {
  const response = await fetch(`${baseURL}/${deckId}/draw/?count=${cardNumber}`);
  const result = await response.json();
  return result;
};

export const createPlayerPile = async (
  deckId: string,
  pileName: string,
  cards: string,
): Promise<CreatePlayerPileResponse> => {
  const response = await fetch(`${baseURL}/${deckId}/pile/${pileName}/add?cards=${cards}`);
  const result = await response.json();
  return result;
};

export const drawCardFromPile = async (
  deckId: string,
  pileName: string,
  card: string,
): Promise<DrawCardFromPileResponse> => {
  const queryParams = card ? `cards=${card}` : 'count=1';

  const response = await fetch(`${baseURL}/${deckId}/pile/${pileName}/draw/?${queryParams}`);
  const result = await response.json();
  return result;
};
