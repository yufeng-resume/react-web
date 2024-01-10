import { Link as RouterLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const ExternalLink = styled.a.attrs((props) => ({
  target: '_blank',
  rel: 'noopener noreferrer',
  ...props,
}))``;

export const InternalLink = styled(RouterLink)``;

export const DownloadLink = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;
