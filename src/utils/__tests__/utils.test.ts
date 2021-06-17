import { ROBOT_NAMES } from 'globalConstants';
import { sortPlayers } from '../utils';

describe('util functions', () => {
  it('`sortPlayers` should always return human player first, followed by sorted computer names', () => {
    const result = sortPlayers([
      ROBOT_NAMES.ROBOT_3,
      ROBOT_NAMES.ROBOT_2,
      'Human',
      ROBOT_NAMES.ROBOT_1,
    ]);

    expect(result[0]).toBe('Human');
    expect(result[1]).toBe(ROBOT_NAMES.ROBOT_1);
    expect(result[2]).toBe(ROBOT_NAMES.ROBOT_2);
    expect(result[3]).toBe(ROBOT_NAMES.ROBOT_3);
  });
});
