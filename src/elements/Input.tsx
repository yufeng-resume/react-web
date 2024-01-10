import { css, styled } from 'styled-components';

interface Props {
  $dark?: boolean;
  $hasSuffix?: boolean;
  $hasPrefix?: boolean;
}

export const Input = styled.input.attrs((props) => ({
  type: 'text',
  role: 'textbox',
  'aria-disabled': props.disabled ? 'true' : undefined,
  ...props,
}))<Props>`
  padding: 4px 8px;
  width: 100%;

  color: ${({ theme }) => theme.textColors.base};
  background: ${({ theme }) => theme.colors.secondary10};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.secondary35};

  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary40};
  }

  &:focus {
    background: ${({ theme }) => theme.colors.light};
    border-color: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColors.faded};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.6;
  }

  &[aria-invalid] {
    outline: 2px solid ${({ theme }) => theme.colors.error};
  }

  ${({ $hasSuffix }) => {
    if ($hasSuffix) {
      return css`
        padding-right: 32px;
      `;
    }
  }}

  ${({ $hasPrefix }) => {
    if ($hasPrefix) {
      return css`
        border: none;
      `;
    }
  }}
`;

export const Textarea = styled(Input).attrs((props) => ({
  as: 'textarea',
  ...props,
}))<Props>`
  resize: none;
`;
