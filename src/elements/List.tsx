import { css, styled } from 'styled-components';

export const List = styled.ul<{ $pointless?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    list-style: none;
    position: relative;

    ${({ $pointless }) => {
      if (!$pointless) {
        return css`
          padding-left: 12px;
        `;
      }
    }};

    &:before {
      content: ${({ $pointless }) => ($pointless ? "''" : "'·'")};
      left: 0;
      position: absolute;
    }
  }
`;
