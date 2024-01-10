import { styled } from 'styled-components';

export const Separator = styled.div.attrs({ role: 'separator' })`
  display: flex;
  min-width: 1px;
  min-height: 1px;
  align-self: stretch;
  margin: 32px 0;
  background: ${({ theme }) => theme.colors.secondary20};
`;
