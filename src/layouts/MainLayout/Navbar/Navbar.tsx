import * as RadixNavMenu from '@radix-ui/react-navigation-menu';
import { styled } from 'styled-components';
import { signOut } from 'firebase/auth';
import { useAtom } from 'jotai';

import { InternalLink, ExternalLink } from 'src/elements/Link';
import { auth } from 'src/firebase';
import { sessionAtom } from 'src/utils/atoms/sessionAtom';
import { Button } from 'src/elements/Button';
import { Image } from 'src/components/ui/Image';
import GitHubIcon from 'src/assets/icons/GitHub.png';

const componentSizes = {
  navbarHeight: '56px',
};

const List = styled(RadixNavMenu.List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  margin: 0px;
  position: fixed;
  gap: 20px;
  top: 0;
  width: 100%;
  height: ${() => componentSizes.navbarHeight};
  padding: 0 20px 0 20px;
  z-index: 9999;
  box-sizing: border-box;
`;

interface ItemProps {
  $height?: string;
  $width?: string;
  $maxHeight?: string;
  $maxWidth?: string;
  $background?: string;
  $gap?: string;
}

const Item = styled(RadixNavMenu.Item)<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ $height }) => ($height ? $height : '42px')};
  width: ${({ $width }) => ($width ? $width : '42px')};
  list-style-type: none;
  background: ${({ $background }) => ($background ? $background : 'inherit')};
  gap: ${({ $gap }) => ($gap ? $gap : '0px')};
`;

interface LinkProps {
  $padding?: string;
  $border?: string;
}

const StyledInternalLink = styled(InternalLink)<LinkProps>`
  width: auto;
  height: auto;
  text-decoration: none;
  text-align: center;
  color: ${({ theme }) => theme.textColors.base};
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ $padding }) => ($padding ? $padding : '0px')};
  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
  &:active,
  &:focus {
    color: ${({ theme }) => theme.textColors.base};
  }
  border: 1px solid ${({ theme }) => theme.colors.light};
`;

const StyledExternalLink = styled(ExternalLink)<LinkProps>`
  width: 42px;
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.base};
  background: ${({ theme }) => theme.colors.accent};
  padding: ${({ $padding }) => ($padding ? $padding : '0px')};
  &:hover {
    background: ${({ theme }) => theme.colors.light};
  }
  &:active,
  &:focus {
    color: ${({ theme }) => theme.textColors.base};
  }
`;

const StyledButton = styled(Button)`
  color: red;
`;

const Spacer = styled.div<{ $height?: number }>`
  height: ${({ $height }) => ($height ? `${$height}` : componentSizes.navbarHeight)};
`;

const Navbar = () => {
  const [{ isLoggedIn }] = useAtom(sessionAtom);
  return (
    <>
      <RadixNavMenu.Root>
        <List>
          <Item $width="auto" $height="auto">
            <StyledInternalLink $padding="5px" to="/">
              About me
            </StyledInternalLink>
            <StyledInternalLink $padding="5px" to="/education">
              Education
            </StyledInternalLink>
          </Item>
          <Item $width="auto" $height="auto" $gap="5px">
            <StyledExternalLink href="https://github.com/yufeng-resume/react-web">
              <Image src={GitHubIcon} alt="Source Code" ratio={1} $width="42px" $height="42px"></Image>
            </StyledExternalLink>
            {isLoggedIn ? (
              <StyledButton
                onClick={async () => {
                  await signOut(auth);
                }}
              >
                Sign out
              </StyledButton>
            ) : (
              <StyledInternalLink $padding="5px" to="/login">
                Login
              </StyledInternalLink>
            )}
          </Item>
        </List>
      </RadixNavMenu.Root>
      <Spacer />
    </>
  );
};

export default Navbar;
