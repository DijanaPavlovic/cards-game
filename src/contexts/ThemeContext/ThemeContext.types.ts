export enum Themes {
  Green = 'green',
  Pink = 'pink',
}

export interface ThemeContextState {
  theme: Themes;
  dispatch: React.Dispatch<React.SetStateAction<Themes>>;
}
