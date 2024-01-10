import { styled } from 'styled-components';

export const Tag = styled.span`
  display: flex;
  border-radius: 2px;
  color: ${({ theme }) => theme.textColors.base};
  background: ${({ theme }) => theme.colors.secondary35};
  padding: 2px 6px;
`;
