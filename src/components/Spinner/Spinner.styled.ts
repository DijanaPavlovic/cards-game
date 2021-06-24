import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div.attrs({
  role: 'progressbar',
})`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid ${({ theme }) => theme.primaryLight};
  border-right: 2px solid ${({ theme }) => theme.primaryLight};
  border-bottom: 2px solid ${({ theme }) => theme.primaryLight};
  border-left: 4px solid ${({ theme }) => theme.primaryLight};
  background: transparent;
  width: 42px;
  height: 42px;
  margin: auto;
  border-radius: 50%;
`;

export default Spinner;
