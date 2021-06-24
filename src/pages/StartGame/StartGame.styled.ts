import styled from 'styled-components';

import { Button } from 'components';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  padding: var(--spacing-s);
`;

export const Form = styled.form`
  width: calc(100% - var(--spacing-s));
  padding: var(--spacing-m);
  border-radius: var(--border-radius-xs);
  background: ${({ theme }) => theme.primaryLight};
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  height: 210px;
  justify-content: space-between;
  position: relative;
  max-width: 420px;
`;

export const SubmitButton = styled(Button)`
  position: absolute;
  bottom: var(--spacing-xxs);
  right: var(--spacing-s);
`;
