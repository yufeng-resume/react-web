import * as RadixTooltip from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

import { slideAndFade } from 'src/assets/keyframes';
import { animationTiming, boxShadow } from 'src/assets/mixins';
import { Text } from 'src/elements/Text';

interface Props {
  trigger: ReactNode;
  children: ReactNode | ReactNode[];
  side: 'top' | 'bottom' | 'right' | 'left';
  align: 'start' | 'center' | 'end';
  sideOffset: number;
  alignOffset?: number;
}

const Content = styled(RadixTooltip.Content)`
  background: ${({ theme }) => theme.colors.secondary5};
  border-radius: 2px;
  padding: 4px 12px;

  animation: ${slideAndFade} 0.4s;
  will-change: transform, opacity;
  z-index: 10;

  ${animationTiming}
  ${boxShadow}
`;

const Arrow = styled(RadixTooltip.Arrow)`
  fill: ${({ theme }) => theme.colors.secondary5};
`;

export const Tooltip = ({ children, trigger, side, align, sideOffset, alignOffset = -4 }: Props) => {
  return (
    <RadixTooltip.Root>
      <RadixTooltip.Trigger asChild>{trigger}</RadixTooltip.Trigger>

      <RadixTooltip.Portal>
        <Content side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset}>
          <Text $color="faded">{children}</Text>

          <Arrow />
        </Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};
