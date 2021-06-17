import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { drawCard } from 'store/actionCreators';
import {
  getLoadingStatus,
  getPlayerDecks,
  getPlayedCards,
  getPlayerName,
  getScores,
} from 'store/selectors';

import { Spinner, Scores } from 'components';
import { Container, Cards, Card } from './Board.styled';

const Board = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [focusedCard, setFocusedCard] = useState(null);

  const decks = useSelector(getPlayerDecks);
  const playerName = useSelector(getPlayerName);
  const playedCards = useSelector(getPlayedCards);
  const scores = useSelector(getScores);
  const isLoading = useSelector(getLoadingStatus);

  const hasCardsOnTheTable = Object.values(playedCards).some(Boolean);

  const handleCardPlay = useCallback(
    (event) => {
      const { cardCode } = event.target.dataset;

      if (cardCode) dispatch(drawCard(cardCode));
    },
    [dispatch],
  );

  const handleCardFocus = useCallback((event) => {
    setFocusedCard(event.target.dataset.cardCode);
  }, []);

  const handleKeyUp = useCallback(
    (event) => {
      if (focusedCard && ['Enter', ' '].includes(event.key)) {
        handleCardPlay(event);
      }
    },
    [focusedCard, handleCardPlay],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyUp]);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <Scores scores={scores} />
      <Cards hasCardsOnTheTable={hasCardsOnTheTable}>
        {Object.entries(decks).map(([name, { cardsInHand, playedCard }]) =>
          cardsInHand.map((card, index) => (
            <Card
              data-card-code={name === playerName ? card.code : null}
              image={card.image}
              index={index}
              isHumanPlayer={name === playerName}
              isPlayedCard={card.code === playedCard?.code}
              key={card.code}
              name={name}
              onClick={handleCardPlay}
              onFocus={handleCardFocus}
            />
          )),
        )}
      </Cards>
    </Container>
  );
};

export default Board;
