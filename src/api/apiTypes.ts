interface CommonDataResponse {
  deck_id: string;
  success: boolean;
}

export interface GetNewDeckResponse extends CommonDataResponse {
  remaining: number;
  shuffled: boolean;
}

export interface NonNumberCards {
  ACE: 1;
  JACK: 12;
  QUEEN: 13;
  KING: 14;
}

export type CardValue =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | keyof NonNumberCards;

export interface Card {
  code: string;
  image: string;
  images: { svg: string; png: string };
  suit: 'H' | 'D' | 'S' | 'C';
  value: CardValue;
}

export interface GetPlayerCardsResponse extends CommonDataResponse {
  remaining: number;
  cards: Card[];
}

export interface CreatePlayerPileResponse extends CommonDataResponse {
  remaining: number;
  piles: { [key: string]: { remaining: number } };
}

export interface DrawCardFromPileResponse extends CommonDataResponse {
  cards: Card[];
  piles: { [key: string]: { remaining: number } };
}
