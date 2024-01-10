import { css, styled } from 'styled-components';

import { spin } from 'src/assets/keyframes';
import { animationTiming } from 'src/assets/mixins';

interface Props {
  $variant?: 'primary' | 'secondary' | 'outline' | 'text';
  $size?: 'large' | 'medium' | 'small';
  $loading?: boolean;
  $fullwidth?: boolean;
}

export const Button = styled.button.attrs((props) => ({
  type: 'button',
  role: 'button',
  'aria-disabled': props.disabled ? 'true' : undefined,
  ...props,
}))<Props>`
  cursor: pointer;
  user-select: none;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 4px;

  border-radius: 2px;
  border: 1px solid transparent;

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: translate(1px, 1px);
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.6;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case 'outline':
        return css`
          color: ${({ theme }) => theme.textColors.base};
          fill: ${({ theme }) => theme.textColors.base};
          background: transparent;
          border-color: ${({ theme }) => theme.textColors.base};

          &:hover {
            color: ${({ theme }) => theme.textColors.inverted};
            fill: ${({ theme }) => theme.textColors.inverted};
            background: ${({ theme }) => theme.textColors.base};
          }

          &:after {
            border-color: ${({ theme }) => theme.textColors.base};
          }
        `;
      case 'text':
        return css`
          color: ${({ theme }) => theme.textColors.base};
          fill: ${({ theme }) => theme.textColors.base};
          background: transparent;

          &:hover {
            background: ${({ theme }) => theme.colors.secondaryHover};
          }

          &:after {
            border-color: ${({ theme }) => theme.textColors.base};
          }
        `;
      case 'secondary':
        return css`
          color: ${({ theme }) => theme.textColors.base};
          fill: ${({ theme }) => theme.textColors.base};
          background: ${({ theme }) => theme.colors.secondary};
          border-color: ${({ theme }) => theme.colors.secondary};

          &:after {
            border-color: ${({ theme }) => theme.textColors.base};
          }
        `;
      default:
        return css`
          color: ${({ theme }) => theme.textColors.base};
          fill: ${({ theme }) => theme.textColors.base};
          background: ${({ theme }) => theme.colors.accent};
          border-color: ${({ theme }) => theme.colors.accent};

          &:after {
            border-color: ${({ theme }) => theme.textColors.secondary};
          }
        `;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return css`
          padding: 3px 4px;
        `;
      case 'large':
        return css`
          padding: 7px 21px;
        `;
      default:
        return css`
          padding: 4px 12px;
        `;
    }
  }}

  ${({ $loading }) => {
    if ($loading) {
      return css`
        pointer-events: none;
        color: transparent;
        position: relative;

        &:after {
          content: '';
          position: absolute;
          top: calc(50% - 6px);
          left: calc(50% - 6px);
          height: 12px;
          width: 12px;
          border-width: 2px;
          border-style: solid;
          border-radius: 1000px;
          border-right-color: transparent;
          animation: ${spin} 1s infinite;
          will-change: transform;

          ${animationTiming}
        }
      `;
    }
  }}

  ${({ $fullwidth }) => {
    if ($fullwidth) {
      return css`
        width: 100%;
        justify-content: center;
      `;
    }
  }}
`;
