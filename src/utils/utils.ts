import { ROBOT_NAMES } from 'globalConstants';

const robotNames = Object.values(ROBOT_NAMES);

export const sortPlayers = (players: string[]): string[] =>
  players.sort((a, b) => {
    if (!robotNames.includes(a)) return -1;
    if (!robotNames.includes(b)) return 1;
    return a > b ? 1 : -1;
  });
