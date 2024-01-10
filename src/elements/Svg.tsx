import { forwardRef, FunctionComponent } from 'react';
import { css, styled } from 'styled-components';

import { ReactComponent as Patreon } from 'src/assets/icons/patreon.svg';
import { ReactComponent as Steam } from 'src/assets/icons/steam.svg';
import { spin } from 'src/assets/keyframes';
import { animationTiming } from 'src/assets/mixins';
import { FontSize, TextColor } from 'src/assets/theme';

interface Props {
  name: SvgName;
  $color?: TextColor;
  $size?: FontSize;
  $spin?: boolean;
}

const Base = styled.span.attrs((props) => ({
  role: 'img',
  ...props,
}))<Omit<Props, 'label' | 'name'>>`
  user-select: none;
  color: ${({ $color, theme }) => ($color ? theme.textColors[$color] : 'inherit')};
  fill: ${({ $color, theme }) => ($color ? theme.textColors[$color] : 'inherit')};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ $size, theme }) => {
    return css`
      width: calc(${theme.fontSizes[$size ?? 'normal']} + 3px);
      height: calc(${theme.fontSizes[$size ?? 'normal']} + 3px);
    `;
  }}
  ${({ $spin }) => {
    if ($spin) {
      return css`
        animation: ${spin} 1s infinite;
        will-change: transform;
        ${animationTiming}
      `;
    }
  }};
`;

export type SvgName = 'patreon' | 'steam';

const map: Record<SvgName, FunctionComponent<{}>> = {
  patreon: Patreon,
  steam: Steam,
};

export const Svg = forwardRef<HTMLSpanElement, Props>(({ name, ...rest }, ref) => {
  const Component = map[name];

  return (
    <Base ref={ref} {...rest}>
      <Component />
    </Base>
  );
});
