import React from 'react';

import { sortPlayers } from 'utils/utils';
import { Container, Field, Name, Score } from './Scores.styled';

interface ScoresProps {
  scores: { [key: string]: number };
}

const Scores = ({ scores }: ScoresProps): React.ReactElement => (
  <Container>
    {sortPlayers(Object.keys(scores)).map((name: string) => (
      <Field key={name}>
        <Name>{name}:</Name>
        <Score>{scores[name]}</Score>
      </Field>
    ))}
  </Container>
);

export default Scores;
