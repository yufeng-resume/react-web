import { styled } from 'styled-components';

import { FontSize, TextColor } from 'src/assets/theme';

interface Props {
  $color?: TextColor;
  $size?: FontSize;
}

export const Text = styled.span<Props>`
  color: ${({ $color, theme }) => ($color ? theme.textColors[$color] : theme.textColors['black'])};
  font-size: ${({ $size, theme }) => ($size ? theme.fontSizes[$size] : 'inherit')};
`;

export const Code = styled(Text).attrs((props) => ({
  as: 'code',
  ...props,
}))<Props>`
  font-family: 'Inconsolata', monospace;
  padding: 2px 6px;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.secondaryActive};
`;

export const Small = styled(Text).attrs((props) => ({
  as: 'small',
  ...props,
}))<Props>`
  display: block;
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'small']};
`;

export const Span = styled(Text).attrs((props) => ({
  as: 'span',
  ...props,
}))<Props>`
  display: inline;
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'small']};
`;

export const Paragraph = styled(Text).attrs((props) => ({
  as: 'p',
  ...props,
}))<Props>`
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'normal']};
`;

export const Caption = styled(Text).attrs((props) => ({
  role: 'heading',
  as: 'h4',
  ...props,
}))<Props>`
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'caption']};
`;

export const Subheading = styled(Text).attrs((props) => ({
  role: 'heading',
  as: 'h3',
  ...props,
}))<Props>`
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'subheading']};
`;

export const Heading = styled(Text).attrs((props) => ({
  role: 'heading',
  as: 'h2',
  ...props,
}))<Props>`
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'heading']};
`;

export const Title = styled(Text).attrs((props) => ({
  role: 'heading',
  as: 'h1',
  ...props,
}))<Props>`
  font-size: ${({ $size, theme }) => theme.fontSizes[$size ?? 'title']};
`;
