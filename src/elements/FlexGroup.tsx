import { css, styled } from 'styled-components';

interface Props {
  $gap?: number;
  $vertical?: boolean;
  $start?: boolean;
  $stretch?: boolean;
  $flex?: number;
}

export const FlexGroup = styled.div<Props>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ $gap }: Props) => ($gap ? `${$gap}px` : '0px')};
  width: 100%;
  flex: ${({ $flex = 1 }) => $flex};
  position: relative;

  ${({ $vertical }: Props) => {
    if ($vertical) {
      return css`
        height: 100%;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      `;
    }
  }};

  ${({ $start }: Props) => {
    if ($start) {
      return css`
        align-items: flex-start;
      `;
    }
  }};

  ${({ $stretch }: Props) => {
    if ($stretch) {
      return css`
        align-items: stretch;
      `;
    }
  }};
`;

export const Spacer = styled.div`
  display: flex;
  flex: 1;
`;
