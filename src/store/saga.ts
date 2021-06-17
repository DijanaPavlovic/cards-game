import { delay, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { call, select } from 'typed-redux-saga';

import { getNewDeck, createPlayerPile, drawCardFromPile, getPlayerCards } from 'api/api';

import {
  CARDS_PER_PLAYER,
  ROBOT_NAMES,
  COMPUTER_PLAY_DELAY,
  ROUND_END_DELAY,
} from 'globalConstants';
import {
  GAME_STARTED,
  CARD_DRAW_REQUEST,
  CARD_DRAW_SUCCESS,
  StartGamePayload,
} from 'store/actionTypes';
import * as actions from 'store/actionCreators';
import { getDeckId, getPlayerNames, getRoundCompleted } from 'store/selectors';

const MAX_RETRIES = 5;
const RETRY_DELAY = 1000;

function* startGame({ playerName, robots }: StartGamePayload): Generator {
  try {
    const { deck_id: deckId } = yield* call(getNewDeck);
    yield put(actions.newDeckSuccess(deckId));

    yield fork(createPlayerDeck, { deckId, playerName });

    for (let i = 0; i < +robots; i++) {
      // @ts-ignore
      yield fork(createPlayerDeck, { deckId, playerName: ROBOT_NAMES[`ROBOT_${i + 1}`] });
    }
  } catch (error) {
    yield put(actions.newDeckFailure(error));
  }
}

function* createPlayerDeck({
  deckId,
  playerName,
}: {
  deckId: string;
  playerName: string;
}): Generator {
  for (let retries = 0; retries < MAX_RETRIES; retries++) {
    try {
      // @ts-ignore
      const { cards } = yield* call(getPlayerCards, deckId, CARDS_PER_PLAYER);

      const cardCodesList = cards.map(({ code }) => code).join(',');

      yield call(createPlayerPile, deckId, playerName, cardCodesList);

      yield put(actions.playerPileSuccess({ playerName, cards }));
      return;
    } catch (error) {
      if (retries < MAX_RETRIES) {
        yield delay(RETRY_DELAY);
      } else {
        yield put(actions.playerPileFailure(error));
      }
    }
  }
}

function* drawRoundCards({ cardCode }: { cardCode: string }): Generator {
  try {
    const playerNames = yield* select(getPlayerNames);

    for (let i = 0; i < playerNames.length; i++) {
      const playedCard = i === 0 ? cardCode : null;
      // @ts-ignore
      yield fork(drawFromPlayerPile, { playerName: playerNames[i], cardCode: playedCard });
      yield delay(COMPUTER_PLAY_DELAY);
    }
  } catch (error) {
    // Errors are handled in forked sagas
  }
}

function* drawFromPlayerPile({
  playerName,
  cardCode,
}: {
  playerName: string;
  cardCode: string;
}): Generator {
  for (let retries = 0; retries < MAX_RETRIES; retries++) {
    try {
      const deckId = yield* select(getDeckId);

      const {
        cards: [{ code }],
        // @ts-ignore
      } = yield* call(drawCardFromPile, deckId, playerName, cardCode);

      yield put(actions.drawCardSuccess({ playerName, cardCode: code }));
      return;
    } catch (error) {
      yield put(actions.drawCardFailure(error));
    }
  }
}

function* handleRoundEnd(): Generator {
  try {
    const isRoundCompleted = yield select(getRoundCompleted);

    if (isRoundCompleted) {
      yield delay(ROUND_END_DELAY);
      yield put(actions.roundEndSuccess());
    }
  } catch (error) {
    yield put(actions.roundEndFailure(error));
  }
}

function* rootSaga(): Generator {
  // @ts-ignore
  yield takeLatest(GAME_STARTED, startGame);
  // @ts-ignore
  yield takeEvery(CARD_DRAW_REQUEST, drawRoundCards);
  yield takeEvery(CARD_DRAW_SUCCESS, handleRoundEnd);
}

export { startGame, createPlayerDeck, drawRoundCards, drawFromPlayerPile, handleRoundEnd };
export default rootSaga;
