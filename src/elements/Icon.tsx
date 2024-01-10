import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { css, styled } from 'styled-components';

import { spin } from 'src/assets/keyframes';
import { animationTiming } from 'src/assets/mixins';
import { FontSize, TextColor } from 'src/assets/theme';
import { Tooltip } from 'src/components/ui/Tooltip';

interface Props {
  name: IconName;
  label: string;
  $color?: TextColor;
  $size?: FontSize;
  $spin?: boolean;
  $filled?: boolean;
  $negativeMargin?: boolean;
}

const Base = styled.span.attrs((props) => ({
  role: 'img',
  ...props,
}))<Omit<Props, 'label' | 'name'>>`
  user-select: none;
  color: ${({ $color, theme }) => ($color ? theme.textColors[$color] : 'inherit')};
  font-variation-settings: 'FILL' ${({ $filled }) => ($filled ? '1' : '0')}, 'wght' 200, 'GRAD' 0, 'opsz' 48;

  ${({ $size, theme }) => {
    return css`
      font-size: calc(${theme.fontSizes[$size ?? 'normal']} + 3px);
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
  }}
`;

const BaseButton = styled.button.attrs((props) => ({
  role: 'button',
  'aria-disabled': props.disabled ? 'true' : undefined,
  ...props,
}))<{ $negativeMargin?: boolean }>`
  cursor: pointer;
  padding: 4px;
  display: flex;
  border-radius: 2px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.secondaryActive};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.6;
  }

  ${({ $negativeMargin }) => {
    if ($negativeMargin) {
      return css`
        padding: 1.5px;
        margin: -1.5px;
      `;
    }
  }};
`;

export type IconName =
  | 'settings'
  | 'check'
  | 'close'
  | 'delete'
  | 'person_add'
  | 'person_remove'
  | 'chevron_right'
  | 'chevron_left'
  | 'first_page'
  | 'last_page'
  | 'expand_less'
  | 'expand_more'
  | 'menu'
  | 'list'
  | 'logout'
  | 'login'
  | 'progress_activity'
  | 'person'
  | 'schedule'
  | 'calendar_month'
  | 'verified'
  | 'info'
  | 'nest_eco_leaf'
  | 'cycle'
  | 'shield_person'
  | 'link'
  | 'visibility'
  | 'search'
  | 'content_copy'
  | 'coffee'
  | 'monitoring'
  | 'description'
  | 'smart_display'
  | 'visibility'
  | 'visibility_off';

export const Icon = forwardRef<HTMLSpanElement, Props>(({ name, label, ...rest }, ref) => {
  return (
    <Tooltip
      trigger={
        <span style={{ display: 'flex' }}>
          <AccessibleIcon.Root label={label}>
            <Base ref={ref} {...rest} className="material-symbols-outlined">
              {name}
            </Base>
          </AccessibleIcon.Root>
        </span>
      }
      side="top"
      align="center"
      alignOffset={0}
      sideOffset={2}
    >
      {label}
    </Tooltip>
  );
});

export const IconButton = forwardRef<HTMLButtonElement, Props & ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ name, label, $color, $size, $spin, $filled, ...rest }, ref) => {
    return (
      <BaseButton ref={ref} {...rest}>
        <Icon name={name} label={label} $color={$color} $size={$size} $spin={$spin} $filled={$filled} />
      </BaseButton>
    );
  }
);
