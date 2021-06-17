import React, { lazy } from 'react';
import { useSelector } from 'react-redux';

import { GAME_STATUS } from 'globalConstants';
import { getGameStatus } from 'store/selectors';

const GAME_SCREENS = {
  [GAME_STATUS.START]: lazy(() => import('pages/StartGame/StartGame')),
  [GAME_STATUS.ACTIVE]: lazy(() => import('pages/Board/Board')),
  [GAME_STATUS.END]: lazy(() => import('pages/GameSummary/GameSummary')),
};

const App = (): React.ReactElement => {
  const gameStatus = useSelector(getGameStatus);
  const Page = GAME_SCREENS[gameStatus];

  return <Page />;
};

export default App;
