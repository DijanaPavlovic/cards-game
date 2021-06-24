import styled, { css } from 'styled-components';
import { Flower as FlowerIcon } from '@styled-icons/ionicons-solid';
import { themes } from 'theme';
import { Leaf as LeafIcon } from '@styled-icons/remix-fill/Leaf';

export const Container = styled.div`
  position: fixed;
  top: var(--spacing-xs);
  right: var(--spacing-xs);
`;

const iconStyle = css`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const Leaf = styled(LeafIcon)`
  ${iconStyle};
  color: ${themes.green.primary};
`;

export const Flower = styled(FlowerIcon)`
  ${iconStyle};
  color: ${themes.pink.primary};
`;
