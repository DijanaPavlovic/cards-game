import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import { startGame, resetGame } from 'store/actionCreators';
import { getPlayerName, getScores } from 'store/selectors';
import { RobotsValues } from 'globalConstants';
import Button from 'components/Button/Button';
import {
  Container,
  Title,
  Subtitle,
  GameStats,
  Row,
  StatField,
  Controls,
  Page,
} from './GameSummary.styled';

const GameSummary = (): React.ReactElement => {
  const dispatch = useDispatch();

  const playerName = useSelector(getPlayerName);
  const scores = useSelector(getScores);

  const scoresMap = Object.entries(scores);

  const changeSettings = useCallback(() => {
    dispatch(resetGame());
  }, [dispatch]);

  const replay = useCallback(() => {
    dispatch(
      startGame({
        playerName,
        robots: (scoresMap.length - 1).toString() as RobotsValues,
      }),
    );
  }, [dispatch, playerName, scoresMap.length]);

  const winner = scoresMap.reduce(
    (acc, [name, score]) => (score > acc.score ? { name, score } : acc),
    { name: '', score: 0 },
  );

  return (
    <Page>
      <Helmet>
        <title>Cards Game | Summary</title>
      </Helmet>
      <Container>
        {winner.name === playerName ? (
          <>
            <Title>Congratulations!</Title>
            <Subtitle>You won the game with {winner.score} points.</Subtitle>
          </>
        ) : (
          <Subtitle>
            {winner.name} won the game with {winner.score} points.
          </Subtitle>
        )}
        <GameStats>
          {scoresMap
            .sort(([, a], [, b]) => (a > b ? -1 : 1))
            .map(([name, score]) => (
              <Row key={name} isPlayerRow={name === playerName}>
                <StatField>{name}</StatField>
                <StatField>{score}</StatField>
              </Row>
            ))}
        </GameStats>
        <Controls>
          <Button onClick={changeSettings}>CHANGE SETTINGS</Button>
          <Button onClick={replay}>PLAY AGAIN</Button>
        </Controls>
      </Container>
    </Page>
  );
};

export default GameSummary;
