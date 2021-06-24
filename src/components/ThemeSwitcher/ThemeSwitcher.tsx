import { useContext } from 'react';

import { ThemeContext } from 'contexts/ThemeContext/ThemeContext';
import { Themes } from 'contexts/ThemeContext/ThemeContext.types';
import { Container, Flower, Leaf } from './ThemeSwitcher.styled';

const ThemeSwitcher = (): React.ReactElement => {
  const { theme, dispatch } = useContext(ThemeContext);

  const changeTheme = () => {
    dispatch(theme === Themes.Green ? Themes.Pink : Themes.Green);
  };

  return (
    <Container>
      {theme === Themes.Green ? <Flower onClick={changeTheme} /> : <Leaf onClick={changeTheme} />}
    </Container>
  );
};

export default ThemeSwitcher;
