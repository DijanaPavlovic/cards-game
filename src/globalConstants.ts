export const GAME_STATUS = {
  START: 'start',
  ACTIVE: 'active',
  END: 'end',
};

export const NON_NUMBER_CARDS = {
  ACE: 1,
  JACK: 12,
  QUEEN: 13,
  KING: 14,
};

export const CARDS_PER_PLAYER = 10;
export const CARD_OFFSET = 30;
export const TABLE_OVERLAP_DISTANCE = 1.2;
export const TABLE_OVERLAP_TWIST = 0.5;
export const COMPUTER_PLAY_DELAY = 1000;
export const ROUND_END_DELAY = 1600;
export const ROBOT_NAMES = {
  ROBOT_1: 'ROBOT_1',
  ROBOT_2: 'ROBOT_2',
  ROBOT_3: 'ROBOT_3',
};

export const CARD_DIMENSIONS_RATIO = 314 / 226;
export const MOBILE_CARD_WIDTH = 60;
export const MOBILE_CARD_HEIGHT = MOBILE_CARD_WIDTH * CARD_DIMENSIONS_RATIO;
export const CARD_WIDTH = 100;
export const CARD_HEIGHT = CARD_WIDTH * CARD_DIMENSIONS_RATIO;

export enum RobotsValues {
  One = '1',
  Two = '2',
  Three = '3',
}

export const robotsOptions = [
  { label: 'One', value: RobotsValues.One },
  { label: 'Two', value: RobotsValues.Two },
  { label: 'Three', value: RobotsValues.Three },
];
